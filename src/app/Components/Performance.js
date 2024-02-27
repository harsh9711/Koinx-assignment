import React from 'react';
import { RxTriangleUp } from 'react-icons/rx';

const InfoRow = ({ leftText, rightText }) => {
    return (
        <div>
            <div className="flex justify-between gap-4">
                <div className="font-inter text-base font-medium leading-5 text-gray-500">{leftText}</div>
                <div className="font-inter text-md font-medium leading-5 text-right">{rightText}</div>
            </div>
            <div className="w-full border-t border-gray-300 my-4 mr-4 ml-1"></div>
        </div>
    );
};

const Performance = () => {
    return (
        <div className="mt-8 w-full lg:w-11/12 bg-white shadow-md rounded-md overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-10">Performance</div>
                <div className="flex justify-center gap-3 mb-4">
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="font-inter text-base font-medium leading-5 text-gray-500">Today's Low</h2>
                            <h2 className="mt-4">46,930.22</h2>
                        </div>
                        <div className="font-inter text-base font-medium leading-5 text-gray-900 p-4"></div>
                    </div>
                    <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-md w-8/12 mt-5"></div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="font-inter text-base font-medium leading-5 text-gray-500">Today’s High</h2>
                        <h2 className="mt-4">49,343.83</h2>
                    </div>
                </div>
                <div className="flex justify-center gap-3 mb-5">
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="font-inter text-base font-medium leading-5 text-gray-500">Today's Low</h2>
                            <h2 className="mt-4">46,930.22</h2>
                        </div>
                        <div className="font-inter text-base font-medium leading-5 text-gray-900 p-4"></div>
                    </div>
                    <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-green-500 rounded-md w-8/12 mt-5"></div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="font-inter text-base font-medium leading-5 text-gray-500">Today’s High</h2>
                        <h2 className="mt-4">49,343.83</h2>
                    </div>
                </div>
                <div className="font-bold text-lg mb-2">Fundamentals</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
                </p>
                <div className="flex gap-40">
                    <div className="flex flex-col">
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="24h Low / 24h High" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                    </div>
                    <div className="flex flex-col">
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="24h Low / 24h High" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                        <InfoRow leftText="Bitcoin Price" rightText="$16,815.46" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
