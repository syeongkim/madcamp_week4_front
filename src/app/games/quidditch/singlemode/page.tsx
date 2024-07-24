"use client";

import React, { useEffect, useState } from "react";
import "../styles/quidditch.css";
import { updateDormPoints } from "../../../services/DormsService";

const SingleMode: React.FC = () => {
  const [score, setScore] = useState(0);
  const [ballPosition, setBallPosition] = useState({ top: "50%", left: "50%" });
  const [playerPosition, setPlayerPosition] = useState({
    top: "80%",
    left: "50%",
  });
  const [isGameActive, setIsGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const moveBall = () => {
    const top = Math.random() * 90 + "%";
    const left = Math.random() * 90 + "%";
    setBallPosition({ top, left });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isGameActive) return;

    const step = 5; // Movement step in percentage
    const gameArea = document
      .querySelector(".flex-grow")
      ?.getBoundingClientRect();
    const playerElement = document.getElementById("player");

    if (gameArea && playerElement) {
      let top = (parseFloat(playerPosition.top) / 100) * gameArea.height;
      let left = (parseFloat(playerPosition.left) / 100) * gameArea.width;

      if (e.key === "ArrowUp") {
        top = Math.max(0, top - (step / 100) * gameArea.height);
      } else if (e.key === "ArrowDown") {
        top = Math.min(
          gameArea.height - playerElement.offsetHeight,
          top + (step / 100) * gameArea.height
        );
      } else if (e.key === "ArrowLeft") {
        left = Math.max(0, left - (step / 100) * gameArea.width);
      } else if (e.key === "ArrowRight") {
        left = Math.min(
          gameArea.width - playerElement.offsetWidth,
          left + (step / 100) * gameArea.width
        );
      }

      setPlayerPosition({
        top: `${(top / gameArea.height) * 100}%`,
        left: `${(left / gameArea.width) * 100}%`,
      });
    }
  };

  const checkCollision = () => {
    const ball = document
      .getElementById("quidditch-ball")
      ?.getBoundingClientRect();
    const player = document.getElementById("player")?.getBoundingClientRect();

    if (ball && player) {
      const isColliding = !(
        player.right < ball.left ||
        player.left > ball.right ||
        player.bottom < ball.top ||
        player.top > ball.bottom
      );

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
    setPlayerPosition({ top: "80%", left: "50%" });
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
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
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
      // 게임이 끝나면 점수 업데이트
      const dormId = localStorage.getItem("dormId");
      if (dormId) {
        updateDormPoints(dormId, score).catch((error) => {
          console.error("Failed to update dorm points:", error);
        });
      } else {
        console.error("No dorm ID found in local storage");
      }
    }
  }, [isGameActive, timeLeft, score]);

  return (
    <div className="min-h-screen bg-quidditch-single bg-cover bg-center flex flex-col items-center text-center relative">
      <audio
        src="https://syeongkim.github.io/madcamp_week4_front/musics/11_The_Quidditch_Match_Game.mp3"
        autoPlay
        loop
      />
      <h1 className="font-Harry text-gradient-red fixed top-0 w-full">
        Single Mode
      </h1>
      <div className="fixed top-10 right-10 text-black text-2xl font-Harry">
        Score: {score}
      </div>
      <div className="fixed top-10 left-10 text-black text-2xl font-Harry">
        Time Left: {timeLeft}s
      </div>
      <div className="flex-grow flex items-center justify-center relative w-full h-full">
        {!isGameActive && (
          <button
            className="btn-start font-Harry text-white text-4xl"
            onClick={startGame}
          >
            Start
          </button>
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
