import React from 'react';

interface DormProps {
  type: React.ReactNode;
  color: string;
  onClick?: () => void;
}

function DormCard({ type, color, onClick }: DormProps) {
  return (
    <div className="dorm-container cursor-pointer" onClick={onClick}>
      <h1 
        className={`dorm hover:text-${color}`}
        style={{
          textShadow: `4px 4px 8px ${color}`
        }}>{type}</h1>
    </div>
  );
}

export default DormCard;
