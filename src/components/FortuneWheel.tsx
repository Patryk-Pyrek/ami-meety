
import React, { useState } from 'react';

const FortuneWheel: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string>('');

  const foods = [
    'Sushi 🍣', 'Burger 🍔', 'Makaron 🍝', 'Pizza 🍕', 'Tacos 🌮',
    'Ramen 🍜', 'Kebab 🥙', 'Pierogi 🥟', 'Naleśniki 🥞', 'Zapiekanka 🥖',
    'Salad 🥗', 'Sandwich 🥪', 'Bagel 🥯', 'Hot Dog 🌭', 'Falafel 🧆',
    'Curry 🍛', 'Paella 🥘', 'Risotto 🍚', 'Dim Sum 🥠', 'Pho 🍲'
  ];

  const spin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setResult('');
    
    setTimeout(() => {
      const randomFood = foods[Math.floor(Math.random() * foods.length)];
      setResult(randomFood);
      setIsSpinning(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h3 className="text-2xl font-bold holographic">Koło Fortuny - Jedzenie!</h3>
      
      <div className="relative">
        <div 
          className={`w-64 h-64 rounded-full border-8 border-pink-500 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 flex items-center justify-center cursor-pointer neon-glow ${isSpinning ? 'spin-wheel' : ''}`}
          onClick={spin}
        >
          <div className="text-6xl">🎯</div>
        </div>
        
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-yellow-400"></div>
        </div>
      </div>

      {result && (
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-lg text-xl font-bold neon-glow">
          {result}
        </div>
      )}

      {!isSpinning && !result && (
        <p className="text-lg text-gray-600">Kliknij koło, aby wylosować jedzenie!</p>
      )}
    </div>
  );
};

export default FortuneWheel;
