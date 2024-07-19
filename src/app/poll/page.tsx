// 'use client';

// import React, { useState } from 'react';
// import Question from './components/Question';
// import Result from './components/Result';
// import Confused from './components/Confused';
// import './styles/poll.css';

// const questions = [
//   {
//     questionText: 'How would you like to be remembered by others?',
//     options: [
//       'A brave and righteous person', 
//       'A kind and trustworthy person', 
//       'A smart and creative person', 
//       'A successful and influential person'
//     ],
//   },
//   {
//     questionText: 'What do you do when you witness cheating on a test?',
//     options: [
//       'Immediately report it to the teacher.', 
//       'Discuss with friends and decide together.', 
//       'Quietly overlook it but keep it in mind.', 
//       'Decide what to do based on the situation.'
//     ],
//   },
//   {
//     questionText: 'What is your role when starting a new team project?',
//     options: [
//       'Lead the team and set the direction.', 
//       'Encourage team members and promote cooperation.', 
//       'Provide creative and innovative ideas.', 
//       'Develop strategies and set plans to achieve goals.'
//     ],
//   },
//   {
//     questionText: 'What type of protagonist do you admire most in a movie or book?',
//     options: [
//       'A heroic leader', 
//       'A loyal friend', 
//       'An intellectual seeker', 
//       'A successful strategist'
//     ],
//   },
// ];

// const bonusQuestion = {
//   questionText: 'What is your preferred learning method?',
//   options: [
//     'Learning through practice',
//     'Studying together and discussing',
//     'Reading books and researching',
//     'Strategically planning and setting goals'
//   ],
// };

// export default function Poll() {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
//     const [showBonusQuestion, setShowBonusQuestion] = useState(false);
//     const [bonusQuestionAnswered, setBonusQuestionAnswered] = useState(false);
//     const [finalResult, setFinalResult] = useState<string | null>(null);
//     const [maxAnswerIndex, setMaxAnswerIndex] = useState<number | null>(null);
  
//     const handleSelectOption = (index: number) => {
//       const newAnswers = [...answers];
  
//       if (showBonusQuestion) {
//         setBonusQuestionAnswered(true);
//       } else {
//         newAnswers[currentQuestionIndex] = index;
//         setAnswers(newAnswers);
  
//         if (currentQuestionIndex < questions.length - 1) {
//           setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//           const uniqueAnswers = new Set(newAnswers);
//           const counts = newAnswers.reduce((acc, ans) => {
//             acc[ans] = (acc[ans] || 0) + 1;
//             return acc;
//           }, {} as Record<number, number>);
//           const countsValues = Object.values(counts);
  
//           if (uniqueAnswers.size === 4 || (countsValues.includes(2) && countsValues.length === 2)) {
//             setShowBonusQuestion(true);
//             setFinalResult('All answers are unique or two answers are tied. Bonus question is shown.');
//           } else {
//             const maxAnswerIndex = Object.keys(counts).reduce((a, b) => counts[parseInt(a)] > counts[parseInt(b)] ? a : b);
//             setMaxAnswerIndex(parseInt(maxAnswerIndex));
//             setFinalResult(`Your answers are processed. Most common answer index: ${maxAnswerIndex}`);
//           }
//         }
//       }
//     };
  
//     return (
//       <div className="poll min-h-screen flex flex-col items-center justify-center">
//         {finalResult === null ? (
//           <Question
//             questionText={showBonusQuestion ? bonusQuestion.questionText : questions[currentQuestionIndex].questionText}
//             options={showBonusQuestion ? bonusQuestion.options : questions[currentQuestionIndex].options}
//             onSelectOption={handleSelectOption}
//           />
//         ) : (
//           <div>
//             {maxAnswerIndex !== null ? (
//               <Result resultIndex={maxAnswerIndex} />
//               ) : (
//               <h2><Confused></Confused></h2>
//               )}
//           </div>
//         )}
//       </div>
//     );
//   }

'use client';

import React, { useState, useEffect } from 'react';
import Question from '../components/Question';
import Result from '../components/Result';
import Confused from '../components/Confused';
import './styles/poll.css';

const questions = [
  {
    questionText: 'How would you like to be remembered by others?',
    options: [
      'A brave and righteous person', 
      'A kind and trustworthy person', 
      'A smart and creative person', 
      'A successful and influential person'
    ],
  },
  {
    questionText: 'What do you do when you witness cheating on a test?',
    options: [
      'Immediately report it to the teacher.', 
      'Discuss with friends and decide together.', 
      'Quietly overlook it but keep it in mind.', 
      'Decide what to do based on the situation.'
    ],
  },
  {
    questionText: 'What is your role when starting a new team project?',
    options: [
      'Lead the team and set the direction.', 
      'Encourage team members and promote cooperation.', 
      'Provide creative and innovative ideas.', 
      'Develop strategies and set plans to achieve goals.'
    ],
  },
  {
    questionText: 'What type of protagonist do you admire most in a movie or book?',
    options: [
      'A heroic leader', 
      'A loyal friend', 
      'An intellectual seeker', 
      'A successful strategist'
    ],
  },
];

const bonusQuestion = {
  questionText: 'What is your preferred learning method?',
  options: [
    'Learning through practice',
    'Studying together and discussing',
    'Reading books and researching',
    'Strategically planning and setting goals'
  ],
};

export default function Poll() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showBonusQuestion, setShowBonusQuestion] = useState(false);
  const [bonusQuestionAnswered, setBonusQuestionAnswered] = useState(false);
  const [finalResult, setFinalResult] = useState<string | null>(null);
  const [maxAnswerIndex, setMaxAnswerIndex] = useState<number | null>(null);
  const [showConfused, setShowConfused] = useState(false);

  const handleSelectOption = (index: number) => {
    const newAnswers = [...answers];

    if (showBonusQuestion) {
      setBonusQuestionAnswered(true);
      setFinalResult(`Bonus question answer: ${index}`);
      setMaxAnswerIndex(index);
      console.log('Bonus question answer:', index);
    } else {
      newAnswers[currentQuestionIndex] = index;
      setAnswers(newAnswers);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        const uniqueAnswers = new Set(newAnswers);
        const counts = newAnswers.reduce((acc, ans) => {
          acc[ans] = (acc[ans] || 0) + 1;
          return acc;
        }, {} as Record<number, number>);
        const countsValues = Object.values(counts);

        if (uniqueAnswers.size === 4 || (countsValues.includes(2) && countsValues.length === 2)) {
          setShowConfused(true);
          setTimeout(() => {
            setShowConfused(false);
            setShowBonusQuestion(true);
            setFinalResult(null);
          }, 3000);
        } else {
          const maxAnswerIndex = Object.keys(counts).reduce((a, b) => counts[parseInt(a)] > counts[parseInt(b)] ? a : b);
          setMaxAnswerIndex(parseInt(maxAnswerIndex));
          setFinalResult(`Your answers are processed. Most common answer index: ${maxAnswerIndex}`);
        }
      }
    }
    if (bonusQuestionAnswered) {
      setFinalResult(`Your answers are processed. Most common answer index: ${maxAnswerIndex}`);
    }
  };

  return (
    <div className="poll min-h-screen flex flex-col items-center justify-center">
      {finalResult === null ? (
        showConfused ? (
          <Confused />
        ) : (
          <Question
            questionText={showBonusQuestion ? bonusQuestion.questionText : questions[currentQuestionIndex].questionText}
            options={showBonusQuestion ? bonusQuestion.options : questions[currentQuestionIndex].options}
            onSelectOption={handleSelectOption}
          />
        )
      ) : (
        <div>
          {maxAnswerIndex !== null ? (
            <Result resultIndex={maxAnswerIndex} />
          ) : (
            <h2><Confused /></h2>
          )}
        </div>
      )}
    </div>
  );
}
