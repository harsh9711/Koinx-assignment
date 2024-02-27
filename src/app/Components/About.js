import React from 'react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";
import profilePic1 from '/Users/harshsahcdeva/Desktop/projects/koinx/public/assets/5c577ca47c764bd8af01d840fe7ffccb.jpeg';
import profilePic2 from "/Users/harshsahcdeva/Desktop/projects/koinx/public/assets/e39cee97d83ba894aa0c105133924b9b.jpeg";
const ProfileCard = ({ profilePic, colors, name, description }) => {
    return (
        <div className={`flex flex-col lg:flex-row rounded-xl ${colors}`}>
            <div className="flex justify-center items-center lg:w-1/3">
                <Image
                    src={profilePic}
                    alt="Picture of the author"
                    width={120}
                    height={120}
                    className="rounded-lg mt-4 mb-4 lg:mr-4 lg:ml-6"
                />
            </div>
            <div className="flex flex-col justify-center lg:w-2/3">
                <div className="flex flex-col items-center lg:items-start lg:ml-4 mt-4 lg:mt-0">
                    <h2 className="text-white font-inter font-semibold text-center lg:text-left">{name}</h2>
                </div>
                <div className="flex ml-4 justify-center lg:justify-start mt-2 mb-4 lg:mb-0">
                    <button className="flex items-center text-base lg:text-sm leading-7 font-semibold p-2 bg-white w-8/12 lg:w-auto rounded-lg">
                        <h1 className="ml-2">Check Now</h1>
                        <IoIosArrowRoundForward style={{ fontSize: "1.7rem" }} className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};


const About = () => {
    return (
        <div className="mt-8 w-full lg:w-11/12 bg-white shadow-md rounded-md overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-10">
                    <h2>About Bitcoin</h2>
                </div>
                <div className='mb-5'>
                    <h2 className="font-inter font-bold leading-5 text-left text-xl">What is Bitcoin?</h2>
                </div>
                <div>
                <p className="text-gray-700 text-base">
                    Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.                </p>
                </div>
                <div className="w-full border-t border-gray-300 my-4"></div> 

            </div>
            <div className='mb-4'>
                <h2 className="font-inter font-bold leading-5 text-left text-xl ml-6">Lorem ipsum dolor sit amet</h2>
                </div>
            <div className='ml-5'>
                <ul className="list-none w-11/12">
                    <li className='mb-3'>
                        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                    </li>
                    <li className='mb-3'>                        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
                    </li>
                    <li className='mb-3'>                        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                    </li>
                </ul>
                <div className="w-11/12 border-t border-gray-300 my-4 "></div> 
            </div>
          
<div>
          <div className='w-11/12'>
            <h2 className='text-2xl ml-4 font-semibold mb-6'>Already Holding Bitcoin?</h2>
         </div>
            <div className='flex flex-row gap-5 items-center justify-center'>
                <ProfileCard
                    colors="bg-gradient-to-br from-green-400 to-blue-700"
                    profilePic={profilePic1}
                    name="Calculate your tax liability"/>
                <ProfileCard
                    colors="bg-gradient-to-br from-orange-400 to-red-600"
                    profilePic={profilePic2}
                    name="Calculate your tax liability"/>

            </div>
            <div className="w-11/12 border-t border-gray-300 my-4 ml-4 "></div> 
            <div className='item-center justify-center w-11/12 ml-5 mb-10' >
                    <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui

</p>
            </div>
            </div>

        </div>
    );
}

export default About;
