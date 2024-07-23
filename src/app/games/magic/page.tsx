"use client";
import React, { useState, useEffect } from "react";
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
  const [isSpellListModalOpen, setIsSpellListModalOpen] =
    useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [speechResult, setSpeechResult] = useState<string>("");

  useEffect(() => {
    let recognition: SpeechRecognition | null = null;

    if ("webkitSpeechRecognition" in window) {
      recognition = new (window as any).webkitSpeechRecognition();

      // 타입 단언을 사용하여 속성을 설정합니다.
      (recognition as any).continuous = false;
      (recognition as any).interimResults = false;
      (recognition as any).lang = "en-US";

      (recognition as any).onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setUserInput(transcript);
        setSpeechResult(transcript);
        handleCheckAnswer(); // Check the answer after voice input
      };

      (recognition as any).onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
        setSpeechResult("Error occurred: " + event.error);
      };

      (recognition as any).onend = () => {
        setIsListening(false);
      };
    } else {
      console.error("Speech recognition not supported in this browser.");
    }

    if (isListening && recognition) {
      (recognition as any).start();
    } else if (!isListening && recognition) {
      (recognition as any).stop();
    }

    return () => {
      if (recognition) {
        (recognition as any).stop();
      }
    };
  }, [isListening, selectedSpell]);

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

      const spellParts = spellName
        .split(/\s*\(\s*|\s*\)\s*/)
        .map((part) => part.trim());

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

  const handleShowSpellList = () => {
    setIsSpellListModalOpen(true);
  };

  const handleCloseSpellListModal = () => {
    setIsSpellListModalOpen(false);
  };

  const handleMicClick = () => {
    setIsListening(!isListening);
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
      <div className="fixed top-0 right-0 p-4 flex flex-col">
        <button
          className="magic-hint-button"
          onClick={handleShowSpellList}
        ></button>
        <text className="mt-3 font-Animales text-xs text-white text-center">
          secret hint
        </text>
      </div>
      {selectedSpell && (
        <div className="font-Animales text-center px-10">
          <p className="text-xl mt-6">"{selectedSpell.description}"</p>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Fill here or speak"
              className="block mx-auto mb-4 text-black magic-input"
            />
            <button
              className="text-4xl p-2 bg-transparent rounded animate-pulse"
              onClick={handleMicClick}
            >
              🎙️
            </button>
          </div>
          <button onClick={handleCheckAnswer} className="block mx-auto mt-4">
            Check Answer
          </button>
          <p className="mt-4 text-center text-white">
            <strong>Speech Result:</strong> {speechResult}
          </p>
        </div>
      )}
      {isModalOpen && feedback.startsWith("Correct!") && (
        <div
          className="modal fixed inset-0 flex flex-col pb-24 pt-12 justify-center items-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <button
            className="absolute top-12 right-12 text-white text-2xl"
            onClick={handleCloseModal}
          >
            &times;
          </button>
          <div
            className="relative flex justify-center items-center w-full h-full max-w-screen-md max-h-screen-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-owl bg-no-repeat bg-center bg-contain w-full h-full"></div>
          </div>
          <p className="text-white text-center mb-12 font-Harry text-5xl">
            Correct! Your owl will give you 1 point each day.
          </p>
        </div>
      )}
      {isSpellListModalOpen && (
        <div
          className="modal fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50"
          onClick={handleCloseSpellListModal}
        >
          <div
            className="relative bg-paper-background rounded-lg p-4 w-10/12 max-w-2xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-black text-2xl"
              onClick={handleCloseSpellListModal}
            >
              &times;
            </button>
            <h2 className="text-4xl font-Harry mb-4 text-black">All Spells</h2>
            <ul className="spell-list overflow-y-auto max-h-80">
              {spells.map((spell, index) => (
                <li key={index} className="mb-2 text-black font-Animales">
                  <strong>● {spell.name}</strong>: {spell.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Magic;
