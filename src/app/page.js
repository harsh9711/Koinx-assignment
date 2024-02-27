import React from 'react';
import Bitcoin from "./Components/Bitcoin";
import TredingCoin from "./Components/TredingCoin";
import BlueCard from "./Components/BlueCard";
import Team from "./Components/Team";
import Tokenomics from "./Components/Tokenomics";
import AlsoLike from "./Components/AlsoLike";
import TrendingCoins from "./Components/TrendingCoins"; // Uncomment if needed
import About from './Components/About';
import Sentiment from './Components/Sentiment';
import Performance from './Components/Performance';

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row lg:ml-6 mb-20">
        {/* Left Column */}
        <div className="ml-3 mr-3 lg:w-11/12">
          <Bitcoin />
          <Performance/>
          <Sentiment/>
          <About />
          <Tokenomics />
          <Team />
         
        </div>
        {/* Right Column */}
        <div className="lg:w-6/12 mt-8 lg:mt-8">
          <BlueCard />
          <div className="mt-5 lg:mt-5 ml-6 mr-7 lg:mr-1 lg:ml-4">
            <TredingCoin />
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex flex-col lg:flex-col items-center justify-center">
        <div className="lg:w-11/12 ml-3 mr-3 lg:mb-5">
          <h2 className="text-2xl font-semibold lg:mt-20 lg:mb-8">You May Also Like</h2>
          <AlsoLike />
        </div>
        <div className="lg:w-11/12 ml-3 lg:ml-3 mr-3 lg:mr-3 mb-20">
          <h2 className="text-2xl font-semibold mt-8 mb-8">Trending Coins</h2>
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
}
