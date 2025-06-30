// src/components/ActivityCard.tsx
import React from 'react';
import './ActivityCard.css'; 

type ActivityCardProps = {
  title: string;
  isRevealed: boolean;
  onClick: () => void;
};

const ActivityCard: React.FC<ActivityCardProps> = ({ title, isRevealed, onClick }) => (
  <div
    className={`activity-card ${isRevealed ? 'revealed' : ''}`}
    onClick={onClick}
  >
    <div className="card-front glass-effect">
      <p className="text-2xl font-bold">?</p>
    </div>
    <div className="card-back glass-effect">
      <p className="text-lg font-semibold">{title}</p>
    </div>
  </div>
);

export default ActivityCard;
