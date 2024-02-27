import React from 'react';
import Image from 'next/image';
import photo1 from "/public/assets/1.jpg";

const Tokenomics = () => {
    return (
        <div className="mt-8 w-full lg:w-11/12 bg-white shadow-md rounded-md overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-inter text-xl font-semibold leading-7 text-left mb-10">Tokenomics</div>
                <div className="font-inter text-2xl font-semibold leading-9 text-left">Initial Distribution</div>
                <div className="w-full lg:w-2/3 mx-auto mt-6 lg:mt-8">
                    <Image src={photo1} alt="Tokenomics Image" />
                </div>
                <p className="text-gray-700 text-base mt-6 lg:mt-8">
                    Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
                </p>
            </div>
        </div>
    );
};

export default Tokenomics;
