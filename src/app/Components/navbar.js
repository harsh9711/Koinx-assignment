"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className='h-16 w-full border-b-[1px] border-gray-50 bg-white'>
            <div className='mx-auto flex h-full w-[90%] items-center justify-between'>
                <div className='flex w-1/2 items-center justify-start'>
                    <Image
                        src='/assets/logo.svg'
                        alt="Logo"
                        width={81}
                        height={20.25}
                        className=''
                    />
                </div>
                <div className='lg:hidden'>
                    <button onClick={toggleSidebar}>
                        <Image
                            src='/assets/hamburger-menu.svg'
                            alt="Menu"
                            width={27.41}
                            height={27.41}
                            className=''
                        />
                    </button>
                </div>
                {showSidebar && (
                    <div className='fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50'>
                        <ul className="flex flex-col h-full justify-center items-start pt-16 px-4">
                            <li className="py-2">Crypto Taxes</li>
                            <li className="py-2">Free Tools</li>
                            <li className="py-2">Resource Center</li>
                        </ul>
                        <button className="w-full h-12 px-2 mt-4 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 text-white">
                            Get Started
                        </button>
                    </div>
                )}
                <div className='hidden lg:flex justify-end lg:justify-between h-full lg:w-1/2'>
                    <div className="h-full w-full flex gap-8 justify-center items-center">
                        <ul className="flex w-full h-full justify-around items-center font-inter text-base font-semibold leading-6 tracking-tighter text-left">
                            <li className="ml-11">Crypto Taxes</li>
                            <li className="mr-1">Free Tools</li>
                            <li>Resource Center</li>
                        </ul>
                        <button className="w-36 h-12 px-2 rounded-md gap-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
