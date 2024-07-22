"use client";
import React, { useState } from "react";
import spells from "./spells.json";
import Button from "../../components/Button";
import "./styles/magic.css";

const Magic: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedSpell, setSelectedSpell] = useState<{
    name: string;
    description: string;
  } | null>(null);
  const [userInput, setUserInput] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    const filteredSpells = spells.filter((spell) =>
      spell.name.startsWith(letter)
    );
    if (filteredSpells.length > 0) {
      const randomSpell =
        filteredSpells[Math.floor(Math.random() * filteredSpells.length)];
      setSelectedSpell(randomSpell);
    } else {
      setSelectedSpell(null);
    }
    setUserInput("");
    setFeedback("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleCheckAnswer = () => {
    if (selectedSpell) {
      const spellName = selectedSpell.name.toLowerCase();
      const userAnswer = userInput.toLowerCase();

      // Split the spell name into parts based on parentheses and trim extra spaces
      const spellParts = spellName
        .split(/\s*\(\s*|\s*\)\s*/)
        .map((part) => part.trim());

      // Check if user input matches any part of the spell name
      const isCorrect = spellParts.some((part) => part === userAnswer);

      if (isCorrect) {
        setFeedback("Correct! The owl will give you 1 point each day.");
        setIsModalOpen(true);
      } else {
        setFeedback("Incorrect. Try again!");
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFeedback("");
  };

  return (
    <div className="text-white bg-cover bg-spell-background min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-Harry text-center text-gradient-green">
        Magic Spell
      </h1>
      <div className="flex justify-center mb-5">
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(
          (letter) => (
            <Button
              className="font-Harry mx-2 text-2xl"
              key={letter}
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </Button>
          )
        )}
      </div>
      {selectedSpell && (
        <div className="font-Animales text-center px-10">
          <p className="text-xl mt-6">"{selectedSpell.description}"</p>
          <div className="mt-4">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Enter the spell name"
              className="block mx-auto mb-4 text-black magic-input"
            />
            <button onClick={handleCheckAnswer} className="block mx-auto">
              Check Answer
            </button>
          </div>
        </div>
      )}
      {/* {feedback && <p className="text-center mt-4 font-Animales">{feedback}</p>} */}
      {isModalOpen && feedback.startsWith("Correct!") && (
        <div
          className="modal fixed inset-0 flex flex-col pb-24 pt-12 justify-center items-center bg-black bg-opacity-50"
          onClick={handleCloseModal} // Click on background closes the modal
        >
          <button
            className="absolute top-12 right-12 text-white text-2xl"
            onClick={handleCloseModal}
          >
            &times;
          </button>
          <div
            className="relative flex justify-center items-center w-full h-full max-w-screen-md max-h-screen-md"
            onClick={(e) => e.stopPropagation()} // Prevent click events from bubbling up to the background
          >
            <div className="bg-owl bg-no-repeat bg-center bg-contain w-full h-full"></div>
          </div>
          <p className="text-white text-center mb-12 font-Harry text-5xl">
            Correct! Your owl will give you 1 point each day.
          </p>
        </div>
      )}
    </div>
  );
};

export default Magic;
