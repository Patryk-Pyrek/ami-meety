
import React, { useState } from 'react';

interface ActivityCardProps {
  title: string;
  isRevealed: boolean;
  onClick: () => void;
  gradient: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, isRevealed, onClick, gradient }) => {
  return (
    <div 
      className={`card-flip w-32 h-32 cursor-pointer ${isRevealed ? 'card-flipped' : ''}`}
      onClick={onClick}
    >
      <div className="card-inner">
        <div className={`card-front ${gradient} flex items-center justify-center shadow-lg neon-glow`}>
          <div className="text-6xl">💖</div>
        </div>
        <div className={`card-back ${gradient} flex items-center justify-center shadow-lg p-2`}>
          <span className="text-white font-bold text-sm text-center leading-tight">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
