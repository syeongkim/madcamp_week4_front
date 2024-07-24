'use client';

import React, { useEffect, useState } from "react";
import '../styles/quidditch.css';

const SingleMode: React.FC = () => {
  const [score, setScore] = useState(0);
  const [ballPosition, setBallPosition] = useState({ top: '50%', left: '50%' });
  const [playerPosition, setPlayerPosition] = useState({ top: '80%', left: '50%' });
  const [isGameActive, setIsGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const moveBall = () => {
    const top = Math.random() * 90 + '%';
    const left = Math.random() * 90 + '%';
    setBallPosition({ top, left });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isGameActive) return;

    const step = 5; // 움직이는 거리 (픽셀 단위)
    let { top, left } = playerPosition;

    if (e.key === 'ArrowUp') {
      top = Math.max(0, parseFloat(top) - step) + '%';
    } else if (e.key === 'ArrowDown') {
      top = Math.min(100, parseFloat(top) + step) + '%';
    } else if (e.key === 'ArrowLeft') {
      left = Math.max(0, parseFloat(left) - step) + '%';
    } else if (e.key === 'ArrowRight') {
      left = Math.min(100, parseFloat(left) + step) + '%';
    }

    setPlayerPosition({ top, left });
  };

  const checkCollision = () => {
    const ball = document.getElementById('quidditch-ball')?.getBoundingClientRect();
    const player = document.getElementById('player')?.getBoundingClientRect();

    if (ball && player) {
      const isColliding = !(player.right < ball.left || 
                            player.left > ball.right || 
                            player.bottom < ball.top || 
                            player.top > ball.bottom);
      
      if (isColliding) {
        setScore(score + 1);
        moveBall();
      }
    }
  };

  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setTimeLeft(30);
    setPlayerPosition({ top: '80%', left: '50%' });
    moveBall();
  };

  useEffect(() => {
    if (isGameActive) {
      const interval = setInterval(moveBall, 2000); // 2초마다 공 이동
      return () => clearInterval(interval);
    }
  }, [isGameActive]);

  useEffect(() => {
    if (isGameActive) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isGameActive, playerPosition]);

  useEffect(() => {
    if (isGameActive) {
      const collisionInterval = setInterval(checkCollision, 100); // 충돌 체크
      return () => clearInterval(collisionInterval);
    }
  }, [isGameActive, playerPosition, ballPosition]);

  useEffect(() => {
    if (isGameActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
    }
  }, [isGameActive, timeLeft]);

  return (
    <div className="min-h-screen bg-quidditch-single bg-cover bg-center flex flex-col items-center text-center relative">
      <h1 className="font-Harry text-gradient-red fixed top-0 w-full">Single Mode</h1>
      <div className="fixed top-10 right-10 text-black text-2xl font-Harry">Score: {score}</div>
      <div className="fixed top-10 left-10 text-black text-2xl font-Harry">Time Left: {timeLeft}s</div>
      <div className="flex-grow flex items-center justify-center relative w-full h-full">
        {!isGameActive && (
          <button className="btn-start font-Harry text-white text-4xl" onClick={startGame}>Start</button>
        )}
        {isGameActive && (
          <>
            <div
              id="quidditch-ball"
              className="quidditch-ball"
              style={{ top: ballPosition.top, left: ballPosition.left }}
            ></div>
            <div
              id="player"
              className="player"
              style={{ top: playerPosition.top, left: playerPosition.left }}
            ></div>
          </>
        )}
      </div>
      {!isGameActive && timeLeft === 0 && (
        <div className="fixed bottom-20 text-white text-2xl font-Harry">
          Game Over! Your Score: {score}
        </div>
      )}
    </div>
  );
};

export default SingleMode;
