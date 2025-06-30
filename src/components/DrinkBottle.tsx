
import React, { useState } from 'react';
import { Droplet } from 'lucide-react';

const DrinkBottle: React.FC = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [result, setResult] = useState<string>('');

  const drinks = [
    'Bubble Tea 🧋', 'Cola 🥤', 'Lipton 🍃', 'Sprite 💚', 'Fanta 🍊',
    'Red Bull 🔴', 'Monster 👹', 'Kawę ☕', 'Herbata 🍵', 'Smoothie 🥤',
    'Lemoniada 🍋', 'Woda z cytryną 💧', 'Kombucha 🍄', 'Matcha 🍵', 'Frappé ❄️',
    'Milkshake 🥛', 'Sok jabłkowy 🍎', 'Sok pomarańczowy 🍊', 'Energy drink ⚡', 'Icetea 🧊',
    'Cappuccino ☕', 'Latte 🤎', 'Americano ⚫', 'Espresso ☕', 'Machiato 🤍',
    'Wodę gazowaną 💧', 'Wodę niegazowaną 💧', 'Kombucha imbirowa 🫚', 'Chai latte 🧡', 'Hot chocolate 🍫'
  ];

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
      
      <div 
        className={`cursor-pointer transform transition-transform hover:scale-110 ${isShaking ? 'bottle-shake' : ''}`}
        onClick={shakeDrink}
      >
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full neon-glow">
          <Droplet size={48} className="text-blue-600" />
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
