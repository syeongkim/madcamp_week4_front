"use client";

import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import Result from "../components/Result";
import Confused from "../components/Confused";
import Button from "../components/Button";
import BackgroundMusic from "../components/BackgroundMusic";
import "./styles/poll.css";

const questions = [
  {
    questionText: "How would you like to be remembered by others?",
    questionTextKr: "다른 사람들에게 당신이 어떻게 기억되길 바라나요?",
    options: [
      "A brave and righteous person",
      "A kind and trustworthy person",
      "A smart and creative person",
      "A successful and influential person",
    ],
    optionsKr: [
      "용감하고 정의로운 사람",
      "친절하고 신뢰할 수 있는 사람",
      "똑똑하고 창의적인 사람",
      "성공적이고 영향력 있는 사람",
    ],
  },
  {
    questionText: "What do you do when you witness cheating on a test?",
    questionTextKr:
      "당신이 시험 중 부정행위를 목격한다면, 어떻게 대처할 것인가요?",
    options: [
      "Immediately report it to the teacher.",
      "Discuss with friends and decide together.",
      "Quietly overlook it but keep it in mind.",
      "Decide what to do based on the situation.",
    ],
    optionsKr: [
      "즉시 선생님께 말씀드린다.",
      "친구들과 상의하고 함께 결정한다.",
      "조용히 무시하지만 마음에 담아둔다.",
      "상황에 따라 행동을 결정한다.",
    ],
  },
  {
    questionText: "What is your role when starting a new team project?",
    questionTextKr: "새로운 팀 프로젝트를 시작할 때, 당신의 역할은 무엇인가요?",
    options: [
      "Lead the team and set the direction.",
      "Encourage team members and promote cooperation.",
      "Provide creative and innovative ideas.",
      "Develop strategies and set plans to achieve goals.",
    ],
    optionsKr: [
      "팀을 이끄고 방향을 설정한다.",
      "팀원들을 격려하고 협력을 촉진한다.",
      "창의적이고 혁신적인 아이디어를 제공한다.",
      "목표를 달성하기 위한 전략을 개발하고 계획을 세운다.",
    ],
  },
  {
    questionText:
      "What type of protagonist do you admire most in a movie or book?",
    questionTextKr: "영화나 책에서 가장 존경하는 주인공 유형은 무엇인가요?",
    options: [
      "A heroic leader",
      "A loyal friend",
      "An intellectual seeker",
      "A successful strategist",
    ],
    optionsKr: [
      "영웅적인 리더",
      "충실한 친구",
      "지적인 탐구자",
      "성공적인 전략가",
    ],
  },
];

const bonusQuestion = {
  questionText: "What is your preferred learning method?",
  questionTextKr: "당신이 선호하는 학습 방법은 무엇인가요?",
  options: [
    "Learning through practice",
    "Studying together and discussing",
    "Reading books and researching",
    "Strategically planning and setting goals",
  ],
  optionsKr: [
    "꾸준한 반복을 통한 학습",
    "함께 공부하고 토론하는 것",
    "책을 읽고 연구는 것",
    "전략적으로 계획하고 목표를 세우는 것",
  ],
};

export default function Poll() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
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
      console.log("Bonus question answer:", index);
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

        if (
          uniqueAnswers.size === 4 ||
          (countsValues.includes(2) && countsValues.length === 2)
        ) {
          setShowConfused(true);
        } else {
          const maxAnswerIndex = Object.keys(counts).reduce((a, b) =>
            counts[parseInt(a)] > counts[parseInt(b)] ? a : b
          );
          setMaxAnswerIndex(parseInt(maxAnswerIndex));
          localStorage.setItem("userDormId", maxAnswerIndex);
          setFinalResult(
            `Your answers are processed. Most common answer index: ${maxAnswerIndex}`
          );
        }
      }
    }
    if (bonusQuestionAnswered) {
      setFinalResult(
        `Your answers are processed. Most common answer index: ${maxAnswerIndex}`
      );
    }
  };

  const handleGiveHint = () => {
    setShowConfused(false);
    setShowBonusQuestion(true);
  };

  return (
    <div className="poll min-h-screen flex flex-col items-center justify-center">
      <audio
        src="https://syeongkim.github.io/madcamp_week4_front/musics/08_Mr_Longbottom_Flies.mp3"
        autoPlay
        loop
      />
      {finalResult === null ? (
        showConfused ? (
          <div>
            <Confused />
            <Button onClick={handleGiveHint}>
              {"Give a hint to the Sorting Hat >>"}
            </Button>
          </div>
        ) : (
          <Question
            questionText={
              showBonusQuestion
                ? bonusQuestion.questionText
                : questions[currentQuestionIndex].questionText
            }
            questionTextKr={
              showBonusQuestion
                ? bonusQuestion.questionTextKr
                : questions[currentQuestionIndex].questionTextKr
            }
            options={
              showBonusQuestion
                ? bonusQuestion.options
                : questions[currentQuestionIndex].options
            }
            optionsKr={
              showBonusQuestion
                ? bonusQuestion.optionsKr
                : questions[currentQuestionIndex].optionsKr
            }
            onSelectOption={handleSelectOption}
          />
        )
      ) : (
        <div>
          {maxAnswerIndex !== null ? (
            <Result resultIndex={maxAnswerIndex} />
          ) : (
            <div>
              <Confused />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
