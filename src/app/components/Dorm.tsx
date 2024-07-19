import React from 'react';

interface DormProps {
    type: React.ReactNode;
    color: string;
    onClick?: () => void;
  }
  
  function Dorm({ type, color }: DormProps) {
    return (
      <div
      className={`dorm flex flex-col justify-center items-center text-center h-full p-4 rounded border-4 cursor-pointer`}
      style={{
        borderColor: color,
        boxShadow: `0 4px 6px -1px ${color}, 0 2px 4px -2px ${color}`
      }}
    >
      <h1 className="font-bold text-xl">{type}</h1>
    </div>
    );
  }
  
  export default Dorm;
  