'use client'
import React, { useState } from "react";
import spells from './spells.json';
import Button from '../../components/Button';
import './styles/magic.css';

const Magic: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedSpell, setSelectedSpell] = useState<{ name: string, description: string } | null>(null);
  const [userInput, setUserInput] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    const filteredSpells = spells.filter(spell => spell.name.startsWith(letter));
    if (filteredSpells.length > 0) {
      const randomSpell = filteredSpells[Math.floor(Math.random() * filteredSpells.length)];
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
    if (selectedSpell && userInput.toLowerCase() === selectedSpell.name.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Try again!");
    }
  };

  return (
    <div className="text-white container bg-spell-background">
      <h1 className="font-Harry text-center text-gradient-green">Magic Spell</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => (
          <Button 
            className="font-Harry ml-2 mr-2 text-2xl"
            key={letter} 
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>
      {selectedSpell && (
        <div className="font-Animales text-center px-10">
          <p className="text-xl mt-6">"{selectedSpell.description}"</p> {/* 설명 텍스트 크기 증가 */}
          <div className="mt-4">
            <input 
              type="text" 
              value={userInput} 
              onChange={handleInputChange} 
              placeholder="Enter the spell name" 
              className="block mx-auto mb-4 text-black magic-input" // 입력 창을 중앙 정렬 및 아래 여백 추가, magic-input 클래스 추가
            />
            <button onClick={handleCheckAnswer} className="block mx-auto">Check Answer</button> {/* 버튼을 중앙 정렬 */}
          </div>
        </div>
      )}
      {feedback && <p className="text-center mt-4 font-Animales">{feedback}</p>}
    </div>
  );
};

export default Magic;
