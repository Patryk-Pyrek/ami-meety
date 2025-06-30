
import React, { useState } from 'react';

interface ActivityCardProps {
  title: string;
  isRevealed: boolean;
  onClick: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, isRevealed, onClick }) => {
  return (
    <div 
      className={`card-flip w-32 h-32 cursor-pointer ${isRevealed ? 'card-flipped' : ''}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className="card-front bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center shadow-lg neon-glow">
          <div className="text-6xl">💖</div>
        </div>
        <div className="card-back bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center shadow-lg p-2">
          <span className="text-gray-700 font-bold text-sm text-center leading-tight">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
