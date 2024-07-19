'use client';

import React from 'react';

interface QuestionProps {
  questionText: string;
  options: string[];
  onSelectOption: (index: number) => void;
}

const Question: React.FC<QuestionProps> = ({ questionText, options, onSelectOption }) => {
  return (
    <div className="box flex flex-col items-center justify-center">
      <h2 className="title">{questionText}</h2>
      <ul className="options">
        {options.map((option, index) => (
          <li key={option} className="option detail flex flex-col items-center justify-center text-center" onClick={() => onSelectOption(index)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
