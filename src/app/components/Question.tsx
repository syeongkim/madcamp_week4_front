'use client';

import React from 'react';

interface QuestionProps {
  questionText: string;
  questionTextKr: string;
  options: string[];
  optionsKr: string[];
  onSelectOption: (index: number) => void;
}

const Question: React.FC<QuestionProps> = ({ questionText, questionTextKr, options, optionsKr, onSelectOption }) => {
  return (
    <div className="box flex flex-col items-center justify-center">
      <h2 className="title">{questionText}</h2>
      <h4 className="title-kr text-gradient-yellow">{questionTextKr}</h4>
      <ul className="options">
        {options.map((option, index) => (
          <li key={option} className="option detail flex flex-col items-center justify-center text-center" onClick={() => onSelectOption(index)}>
            {option}
            <div className="option-kr">{optionsKr[index]}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
