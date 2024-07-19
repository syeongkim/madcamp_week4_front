import React from 'react';

interface QuestionProps {
  resultIndex: number;
}

const results = [
  {
    resultType: "Gryffindor",
    resultDetail: "You are brave, courageous, and chivalrous.\nYou are a natural leader and are always willing to stand up for what is right."
  },
  {
    resultType: "Hufflepuff",
    resultDetail: "You are loyal, patient, and hardworking.\nYou are a kind and caring person who values friendship and fairness."
  },
  { 
    resultType: "Ravenclaw",
    resultDetail: "You are intelligent, creative, and wise.\nYou have a thirst for knowledge and a love of learning."
  },
  {
    resultType: "Slytherin",
    resultDetail: "You are ambitious, cunning, and resourceful.\nYou are determined to achieve your goals and will do whatever it takes to succeed"
  }
];

const Result: React.FC<QuestionProps> = ({ resultIndex }) => {
  return (
    <div className="box flex flex-col items-center justify-center">
      <h2 className="title">{results[resultIndex].resultType}</h2>
      <p className="detail justify-center text-center">{results[resultIndex].resultDetail}</p>
    </div>
  );
};

export default Result;
