import Image from 'next/image';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const BlueCard = () => {
    return (
        <div className="w-full lg:w-full px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-lg p-6">
                <div className="flex justify-center">
                    <p className="font-inter text-xl lg:text-2xl font-bold text-white text-center lg:w-2/3"> Get Started with KoinX for FREE </p>
                </div>
                <div className="text-white text-base lg:text-sm font-medium text-center mt-5">
                    <p>
                        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
                    </p>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <Image
                        src="/assets/start-free-component-icon.svg"
                        alt="subscribe-img"
                        width={149}
                        height={200}
                    />
                </div>
                <div className="flex justify-center items-center mt-5">
                    <button className="flex items-center text-base lg:text-sm leading-7 font-semibold p-2 bg-white w-full sm:w-1/2 rounded-lg">
                        <h1 className="ml-2 items-center">Get Started for FREE</h1>
                        <IoIosArrowRoundForward style={{ fontSize: "1.7rem" }} className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlueCard;
