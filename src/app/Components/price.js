import React, { useEffect, useRef, useState } from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import Chart from 'chart.js/auto';
import axios from 'axios';

function PriceChangeChart({ data }) {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);
    const usdToInrRate = 73.5;
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
                setTrendingCoins(response.data.coins.slice(7, 8));
            } catch (error) {
                console.error('Error fetching trending coins:', error);
            }
        };

        fetchTrendingCoins();
    }, []);

    const convertToRupees = (priceInUSD) => {
        const numericPriceInUSD = parseFloat(priceInUSD.replace('$', ''));
        if (isNaN(numericPriceInUSD)) {
            console.error("Invalid input price:", priceInUSD);
            return "N/A";
        }
        if (typeof usdToInrRate !== 'number' || isNaN(usdToInrRate)) {
            console.error("Invalid usdToInrRate:", usdToInrRate);
            return "N/A";
        }
        const priceInRupees = numericPriceInUSD * usdToInrRate;
        return `₹${priceInRupees.toFixed(2)}`;
    };

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.data.labels = Object.keys(data.price_change_percentage_24h);
            chartInstance.current.data.datasets[0].data = Object.values(data.price_change_percentage_24h);
            chartInstance.current.update();
        } else {
            chartInstance.current = new Chart(chartContainer.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Chart',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        tension: 0.4,
                        borderWidth: 1,
                    }]
                },
                options: {
                    scales: {
                        x: { grid: { display: false }, title: { display: false } },
                        y: { title: { display: false } }
                    },
                    plugins: {
                        tooltip: { callbacks: {} },
                        legend: {
                            display: true,
                            labels: {
                                generateLabels: (chart) => {
                                    const labels = [];
                                    chart.data.datasets.forEach((dataset, i) => {
                                        labels.push({
                                            text: dataset.label || '',
                                            fillStyle: dataset.backgroundColor,
                                            hidden: !chart.isDatasetVisible(i),
                                            index: i
                                        });
                                    });
                                    return labels;
                                }
                            }
                        }
                    }
                }
            });
        }
    }, [data]);

    return (
        <div className="flex flex-col">
            {trendingCoins.map((coin, index) => (
                <div key={index} className="flex flex-col justify-start">
                    <div className="flex flex-row gap-2 mr-5 mb-10">
                        <img src={coin.item.large} alt={coin.item.name} className="rounded-full" width={50} height={40} />
                        <p className="text-4xl text-black mt-2 text-24 font-semibold leading-29 tracking-normal text-left">{coin.item.name}</p>
                        <p className="text-gray-600 mt-5 text-lg text-16 font-semibold leading-19 tracking-normal text-left">{coin.item.symbol.toUpperCase()}</p>
                        <div className="mt-4 flex items-center gap-2 bg-gray-500 px-2 ml-4 rounded-md w-15 h-8 border border-gray-30">
                            <div className="text-sm text-white font-semibold flex flex-row">Rank #1</div>
                        </div>
                        <div className="rounded-md flex items-center gap-2 bg-green-50"></div>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-4xl mt-1 mr-24 font-semibold">{`${coin.item.data.price}`}</p>
                        <div className="rounded-md flex items-center gap-2 bg-green-50 py-2">
                            {coin.item.data.price_change_percentage_24h && coin.item.data.price_change_percentage_24h.usd !== undefined ? (
                                <div className={`text-sm flex flex-row ${coin.item.data.price_change_percentage_24h.usd >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {coin.item.data.price_change_percentage_24h.usd !== 0 && (
                                        <>
                                            {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                                                <RxTriangleUp className="mt-1 h-4 w-4" />
                                            ) : (
                                                <RxTriangleDown className="mt-1 h-4 w-4" />
                                            )}
                                        </>
                                    )}
                                    <span>{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%</span>
                                </div>
                            ) : (
                                <div className="text-sm mt-1 text-gray-500">N/A</div>
                            )}
                        </div>
                    </div>
                    <p className="text-xl mt-1 mr-24 font-inter">{convertToRupees(coin.item.data.price)}</p>
                    <div className="w-full border-t border-gray-300 my-4"></div>
                    <p className="text-4xl text-black mt-2 text-24 font-semibold leading-29 tracking-normal text-left">{coin.item.name.charAt(0).toUpperCase() + coin.item.name.slice(1)}</p>
                </div>
            ))}
            <canvas ref={chartContainer} />
        </div>
    );
}

export default PriceChangeChart;
