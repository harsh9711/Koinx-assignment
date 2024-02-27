"use client"
import React from 'react'
import Image from 'next/image';
import { IoMail } from "react-icons";
import { BsGraphUpArrow } from "react-icons/bs";
import { Radar } from 'react-chartjs-2';

const createRadarGraph = (labels, data, backgroundColor, borderColor, pointBackgroundColor, pointBorderColor, pointHoverBackgroundColor, pointHoverBorderColor) => {
    const radarData = {
        labels: labels,
        datasets: [
            {
                label: 'Data',
                data: data,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                pointBackgroundColor: pointBackgroundColor,
                pointBorderColor: pointBorderColor,
                pointHoverBackgroundColor: pointHoverBackgroundColor,
                pointHoverBorderColor: pointHoverBorderColor,
            },
        ],
    };

    const options = {
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 5,
                stepSize: 1,
            },
        },
    };

    return (
        <div className="w-full">
            <Radar data={radarData} options={options} />
        </div>
    );
};

const ProfileCard = ({ name, description, iconColor, boxColor }) => {
    const iconStyle = {
        color: iconColor || "blue", // Default to blue if no color is provided
        backgroundColor: boxColor || "bg-blue-100", // Default to blue background if no color is provided
    };

    return (
        <div className={`flex flex-row lg:flex-row justify-between gap-2 items-center lg:w-11/12 rounded-xl mb-5 ${boxColor}`}>
            <div className='flex flex-row lg:flex-row gap-4 items-center relative'>
                <div className={`absolute top-0 left-0 mt-2 ml-2 w-12 h-12 rounded-full flex items-center justify-center ${iconStyle.backgroundColor}`}>
                    <BsGraphUpArrow size={20} style={{ color: "black" }} />
                </div>
                <div className="flex flex-col gap-4 ml-16"> {/* Adjust the ml value based on your preference */}
                    <h2 className='text-lg w-full'>{name}</h2>
                    <p className='text-sm w-full'>{description}</p>
                </div>
            </div>
            <div className="mt-4 lg:mt-0"></div>
        </div>
    );
};


const Sentiment = () => {
    const labels = ['Underlying Technology', 'Roadmap & Progress', 'Team, Partners & Investors', 'Token Performance', 'Ecosystem Development'];
    const data = [1, 2, 3, 4, 5];
    const backgroundColor = 'rgba(54, 162, 235, 0.2)';
    const borderColor = 'rgba(54, 162, 235, 1)';
    const pointBackgroundColor = 'rgba(54, 162, 235, 1)';
    const pointBorderColor = '#fff';
    const pointHoverBackgroundColor = '#fff';
    const pointHoverBorderColor = 'rgba(54, 162, 235, 1)';

    return (
        <div className="mt-8 w-full lg:w-11/12 bg-white shadow-md rounded-md overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Sentiment</div>
                <p className="text-gray-700 text-base">Key Events</p>
            </div>
            <div className="flex flex-row gap-4 items-center justify-center ml-3 mr-3">
                <ProfileCard
                    iconColor="bg-green-600"
                    boxColor="bg-blue-200"
                    name="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
                    description="Lorem ipsum dolor sit amet consectetur In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum."
                />
                <ProfileCard
                    boxColor="bg-green-200"
                    name="Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt."
                    description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum."
                />
            </div>
            <div className="mt-4 px-6 py-4  w-10/12">
                <h2 className="text-lg font-bold mb-2">Analyst Estimates</h2>
                <div className='flex flex-row gap-10 items-center justify-start'>
                    <div className="flex justify-center items-center h-48 w-48 rounded-full bg-green-100 text-green-500 text-2xl font-bold">
                        76%
                    </div>
                    <div className='flex flex-col w-8/12'>
                        <div className='flex flex-row gap-9 items-center'>
                            <div>Buy</div>
                            <div className="relative h-4 bg-green-500 w-8/12">
                                <div className="absolute left-0 top-0 h-full bg-green-500" style={{ width: '76%' }}></div>
                            </div>
                            <div className="text-xs">{`${76}%`}</div>
                        </div>
                        <div className='flex flex-row gap-9 items-center'>
                            <div>Hold</div>
                            <div className="relative h-4 bg-gray-500 w-3/12">
                                <div className="absolute left-0 top-0 h-full bg-gray-500" style={{ width: '8%' }}></div>
                            </div>
                            <div className="text-xs">{`${8}%`}</div>
                        </div>
                        <div className='flex flex-row gap-9 items-center'>
                            <div>Sell</div>
                            <div className="relative h-4 bg-red-500 w-6/12">
                                <div className="absolute left-0 top-0 h-full bg-red-500" style={{ width: '16%' }}></div>
                            </div>
                            <div className="text-xs">{`${16}%`}</div>
                        </div>
                    </div>
                </div>
                <div className="ml-4 w-full border-t border-gray-300 my-4 mt-9"></div>

            </div>
            <div className='mt-4 px-6 py-4  w-10/12'>
            <div className='flex flex-col gap-6'>
                <div className="font-inter text-lg font-semibold leading-5">
                    <h2>Rating</h2>
                </div>
                    <div className='flex flex-row font-inter text-lg font-semibold leading-5 justify-between'>
                        <div>
                            <h2 className='mt-3'>Rating Breakdown: 79.83<span className="text-gray-500">/100</span></h2>
                        </div>

                        <div className='flex flex-row gap-4 items-center'>
                            <div>
                                <h2 className='text-4xl text-green-500'>AAA</h2>
                            </div>
                            <div>
                                <h2 className=' text-xl'>Stable</h2>
                            </div>
                        </div>
                    </div>

            </div>
            </div>

            <div className="w-full p-4">
                {createRadarGraph(
                    labels,
                    data,
                    backgroundColor,
                    borderColor,
                    pointBackgroundColor,
                    pointBorderColor,
                    pointHoverBackgroundColor,
                    pointHoverBorderColor
                )}
            </div>

        </div>
    );
};



export default Sentiment
