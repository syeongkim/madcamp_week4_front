import React from 'react';
import Link from 'next/link';

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
    <div className="box flex flex-col items-center justify-center font-Harry">
      <h2 className="title">{results[resultIndex].resultType}</h2>
      <p className="detail justify-center text-center mb-6">{results[resultIndex].resultDetail}</p>
      <Link href={`/signup?dorm=${results[resultIndex].resultType}`}>
        <p className="text-white text-4xl font-large mt-6 hover:text-yellow-500">Go to Sign Up</p>
      </Link>
    </div>
  );
};

export default Result;
