import React, { useEffect, useState } from 'react';
import PriceChangeChart from '../Components/price';
import axios from 'axios';
function App() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        setTrendingCoins(response.data.coins.slice(7, 8)); // Limiting to top 20 trending coins
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div>
      {trendingCoins.length > 0 && trendingCoins.map((coin, index) => (
        <PriceChangeChart key={index} data={coin.item.data} />
      ))}
    </div>
  );
}

export default App;
