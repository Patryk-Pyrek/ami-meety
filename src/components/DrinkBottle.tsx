
import React, { useState } from 'react';
import { Droplet } from 'lucide-react';
import { drinks } from '../data/activities';

const DrinkBottle: React.FC = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [result, setResult] = useState<string>('');

  const shakeDrink = () => {
    if (isShaking) return;
    
    setIsShaking(true);
    setResult('');
    
    setTimeout(() => {
      const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
      setResult(randomDrink);
      setIsShaking(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h3 className="text-2xl font-bold holographic">Losowanie Napoju!</h3>
      
      <div className="relative">
        <div 
          className={`w-64 h-64 rounded-full border-8 border-blue-300 bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400 flex items-center justify-center cursor-pointer neon-glow ${isShaking ? 'bottle-shake' : ''}`}
          onClick={shakeDrink}
        >
          <Droplet size={80} className="text-blue-600" />
        </div>
        
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-cyan-400"></div>
        </div>
      </div>

      {result && (
        <div className="bg-gradient-to-r from-pink-300 to-rose-400 text-white p-4 rounded-lg text-xl font-bold neon-glow">
          {result}
        </div>
      )}

      {!isShaking && !result && (
        <p className="text-lg text-gray-600">Kliknij butelkę, aby wylosować napój!</p>
      )}
    </div>
  );
};

export default DrinkBottle;
