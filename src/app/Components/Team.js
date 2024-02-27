import React from 'react';
import Image from 'next/image';

import profilePic1 from '/Users/harshsahcdeva/Desktop/projects/koinx/public/assets/51oTVlqzzLL._AC_UF1000,1000_QL80_.jpg';
import profilePic2 from "/Users/harshsahcdeva/Desktop/projects/koinx/public/assets/6b7ed698713c09ad9e6afc7dcb996a09.jpg";
import profilePic3 from "/Users/harshsahcdeva/Desktop/projects/koinx/public/assets/istockphoto-615279718-612x612.jpg";

const ProfileCard = ({ profilePic, name, description }) => {
    return (
        <div className='bg-blue-100 flex flex-col lg:flex-row justify-between gap-2 items-center  lg:w-11/12 rounded-xl mb-5'>
            <div className='flex flex-col lg:flex-col items-center lg:items-start ml-4'>
                <Image
                    src={profilePic}
                    alt="Picture of the author"
                    width={80}
                    height={80}
                    className="rounded-lg lg:mr-4 ml-3 mt-4"
                />
                <div className="flex flex-col items-center lg:items-start">
                    <h2 className='text-lg truncate font-inter font-semibold leading-6 text-center lg:text-left'>{name}</h2>
                    <h7 className='text-xs text-gray-700 font-inter font-medium leading-5 text-center lg:text-left'>Designation here</h7>
                </div>
            </div>
            <div className="mt-4 lg:mt-0">
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    );
};

const Team = () => {
    return (
        <div className="mt-8 w-full lg:w-11/12 bg-white shadow-md rounded-md overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Team</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
                </p>
            </div>
            <div className='flex flex-col lg:flex-row lg:flex-wrap items-center justify-center lg:justify-start ml-3 mr-3 lg:ml-7'>
                <ProfileCard
                    profilePic={profilePic1}
                    name="Johni Smith"
                    description="Lorem ipsum dolor sit amet consectetur In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum." />
                <ProfileCard
                    profilePic={profilePic2}
                    name="John Smith"
                    description="Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. " />
                <ProfileCard
                    profilePic={profilePic3}
                    name="Johni Smith"
                    description="Lorem ipsum dolor sit amet consectetur  r sit amet consectetur In justo rutrum sit sit fermentum In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagi. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas . Malesuada etiam mi gravida praesent interdu" />
            </div>
        </div>
    );
}

export default Team;
