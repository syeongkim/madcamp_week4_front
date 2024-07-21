'use client';

import React, { useRef, useState } from "react";
import ingredients from "./ingredient.json";
import recipes from "./recipe.json";
import "./styles/potion.css";

const Potion: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

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

  const handleIngredientClick = (ingredient: string) => {
    setSelectedIngredients((prevSelected) => {
      if (prevSelected.includes(ingredient)) {
        return prevSelected.filter((item) => item !== ingredient);
      } else {
        return [...prevSelected, ingredient];
      }
    });
  };

  const checkRecipe = () => {
    const foundRecipe = recipes.find((recipe) =>
      recipe.ingredients.every((ingredient) => selectedIngredients.includes(ingredient))
    );

    if (foundRecipe) {
      setResult(`${foundRecipe.name} is created \n ${foundRecipe.effect}`);
    } else {
      setResult("Wrong combination, try again!");
    }
  };

  const resetSelection = () => {
    setSelectedIngredients([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-makepotions-background bg-cover bg-center flex">
      <div
        className="ingredients-container overflow-y-auto"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
      >
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className={`p-1 rounded-lg shadow-lg cursor-pointer relative mb-2 flex flex-col items-center justify-center ${selectedIngredients.includes(ingredient.name) ? "selected-ingredient" : ""}`}
            onClick={() => handleIngredientClick(ingredient.name)}
          >
            <div className="w-20 h-20 relative overflow-hidden rounded-md flex items-center justify-center">
              <img src={ingredient.imageUrl} alt={ingredient.name} className="absolute inset-0 w-full h-full object-cover object-center" />
              {selectedIngredients.includes(ingredient.name) && (
                <>
                  <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </>
              )}
            </div>
            <h2 className="text-xxs font-bold text-white font-Animales text-center mt-2">{ingredient.name}</h2>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="submit-button-container">
          <button className="submit-button mt-2 px-4 py-2 text-white rounded-lg font-Harry" onClick={checkRecipe}>
            Submit
          </button>
        </div>
        {result && (
          <div className="text-center mt-4">
            <h2 className="text-3xl font-bold text-black font-Animales">{result}</h2>
            <button className="mt-2 px-4 py-2 text-white rounded-lg font-Animales" onClick={resetSelection}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Potion;
