"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingCoin = () => {
    const [topCoins, setTopCoins] = useState([]);
    const [updateFrequency, setUpdateFrequency] = useState('');

    useEffect(() => {
        fetchTopCoins();
    }, []);

    const fetchTopCoins = async () => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
            const trendingCoins = response.data.coins;
            const topThreeCoins = trendingCoins.slice(0, 3);
            setTopCoins(topThreeCoins);

            // Set the update frequency
            const updateFreqPercentage = topThreeCoins.map(coin => ({
                ...coin,
                market_cap_percentage: `${coin.item.market_cap_rank}%`
            }));
            setUpdateFrequency(updateFreqPercentage);
        } catch (error) {
            console.error('Error fetching trending coins:', error);
        }
    };

    return (
        <div className="lg:ml-3 w-full lg:w-11/12 border border-gray-200 rounded-md p-4 bg-white">
            <h2 className="text-lg font-bold mb-4">Trending Coins (24h)</h2>
            {topCoins.map((coin, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center justify-between mb-4">
                    <div className="flex items-center mb-2 lg:mb-0">
                        <img
                            src={coin.item.large}
                            alt={coin.item.name}
                            className="w-10 h-10 mr-2 lg:mr-4"
                        />
                        <div className="flex flex-col lg:flex-row items-start lg:items-center">
                            <p className="text-lg font-semibold">{coin.item.name}</p>
                            <p className="text-gray-600 ml-1 lg:ml-2">
                                {'(' + coin.item.symbol.toUpperCase() + ')'}
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 lg:text-base">{coin.item.market_cap_rank}</p>
                </div>
            ))}
        </div>
    );
};

export default TrendingCoin;
