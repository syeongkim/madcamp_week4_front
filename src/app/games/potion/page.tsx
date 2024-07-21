import React from "react";
import ingredients from "./ingredient.json";

const Potion: React.FC = () => {
  return (
    <div>
      <h1 className="text-white font-Harry text-6xl text-center mb-6 mt-4">Potion Ingredients</h1>
      <div className="grid grid-cols-5 gap-4">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="p-4 rounded-lg shadow-lg">
            <div className="w-full h-40 relative overflow-hidden rounded-md mb-2">
              <img src={ingredient.imageUrl} alt={ingredient.name} className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
            <h2 className="text-sm font-bold text-white font-Animales">{ingredient.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Potion;