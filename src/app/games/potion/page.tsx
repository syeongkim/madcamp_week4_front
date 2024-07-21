'use client';

import React, { useRef } from "react";
import ingredients from "./ingredient.json";
import "./styles/potion.css";

const Potion: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.classList.add("scrolling");

    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // 스크롤 속도 조정
      container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      container.classList.remove("scrolling");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="min-h-screen bg-makepotions-background bg-cover bg-center">
      <h1 className="text-gradient-blue font-Harry text-6xl text-center mb-6 mt-4">Potion</h1>
      <div
        className="flex overflow-x-auto whitespace-nowrap mb-6 no-scrollbar"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
      >
        {ingredients.map((ingredient, index) => (
          <div key={index} className="p-1 rounded-lg shadow-lg inline-block">
            <div className="w-20 h-20 relative overflow-hidden rounded-md mb-2">
              <img src={ingredient.imageUrl} alt={ingredient.name} className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
            <h2 className="text-xxs font-bold text-white font-Animales text-center">{ingredient.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Potion;
