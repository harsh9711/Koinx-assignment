"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AlsoLike = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                setTrendingCoins(response.data.coins.slice(0, 9)); 
            } catch (error) {
                console.error('Error fetching trending coins:', error);
            }
        };

        fetchTrendingCoins();
    }, []);

    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return <FaArrowCircleLeft className="slick-arrow" onClick={onClick} />;
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return <FaArrowCircleRight className="slick-arrow" onClick={onClick} />;
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                },
            },
        ],
    };

    return (
        <div className="w-full overflow-x-auto relative">
            <Slider {...settings}>
                {trendingCoins.map((coin, index) => (
                    <div key={index} className="w-200 h-30 border border-gray-200 rounded-md p-2 flex flex-col items-center justify-between">
                        <div className="flex flex-row items-center justify-between gap-20">
                            <div className="flex flex-row">
                                <img src={coin.item.large} alt={coin.item.name} className="rounded-full mr-2" width={20} height={20} />
                                <div>
                                    <p className="text-sm text-gray-600">{coin.item.symbol.toUpperCase()}</p>
                                </div>
                            </div>
                            <div>
                                <p className={`text-sm mt-1 ${coin.item.data.price_change_percentage_24h && coin.item.data.price_change_percentage_24h.usd >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {coin.item.data.price_change_percentage_24h && coin.item.data.price_change_percentage_24h.usd !== undefined ? (
                                        <>
                                            {coin.item.data.price_change_percentage_24h.usd > 0 ? '+' : ''}
                                            {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                                        </>
                                    ) : (
                                        'N/A'
                                    )}
                                </p>
                            </div>
                        </div>
                        <p className="text-sm mt-1 mr-24">{`${coin.item.data.price}`}</p>
                        <img src={coin.item.data.sparkline} alt="Sparkline" className="mt-2 w-56 h-29" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AlsoLike;
