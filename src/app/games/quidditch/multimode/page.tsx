"use client";

import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import "../styles/quidditch.css";

interface Player {
  position: { top: string; left: string };
  score: number;
}

const socket: Socket = io("http://localhost:8080"); // 서버 URL

const MultiMode: React.FC = () => {
  const [players, setPlayers] = useState<{ [key: string]: Player }>({});
  const [ballPosition, setBallPosition] = useState({ top: "50%", left: "50%" });
  const [isGameActive, setIsGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [myId, setMyId] = useState<string | null>(null);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server");
      if (socket.id) {
        setMyId(socket.id);
      }
    });

    socket.on("currentPlayers", (players: { [key: string]: Player }) => {
      console.log("Current players:", players);
      setPlayers(players);
    });

    socket.on(
      "newPlayer",
      ({ playerId, player }: { playerId: string; player: Player }) => {
        console.log("New player:", player);
        setPlayers((prevPlayers) => ({
          ...prevPlayers,
          [playerId]: player,
        }));
      }
    );

    socket.on(
      "playerMoved",
      ({
        playerId,
        position,
      }: {
        playerId: string;
        position: { top: string; left: string };
      }) => {
        console.log("Player moved:", playerId, position);
        setPlayers((prevPlayers) => ({
          ...prevPlayers,
          [playerId]: {
            ...prevPlayers[playerId],
            position,
          },
        }));
      }
    );

    socket.on("playerDisconnected", (playerId: string) => {
      console.log("Player disconnected:", playerId);
      setPlayers((prevPlayers) => {
        const updatedPlayers = { ...prevPlayers };
        delete updatedPlayers[playerId];
        return updatedPlayers;
      });
    });

    return () => {
      socket.off("connect");
      socket.off("currentPlayers");
      socket.off("newPlayer");
      socket.off("playerMoved");
      socket.off("playerDisconnected");
    };
  }, []);

  const moveBall = () => {
    const top = Math.random() * 90 + "%";
    const left = Math.random() * 90 + "%";
    setBallPosition({ top, left });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isGameActive || !myId) return;

    const step = 5; // 움직이는 거리 (픽셀 단위)
    const player = players[myId];
    let { top, left } = player?.position || { top: "50%", left: "50%" };

    if (e.key === "ArrowUp") {
      top = Math.max(0, parseFloat(top) - step) + "%";
    } else if (e.key === "ArrowDown") {
      top = Math.min(100, parseFloat(top) + step) + "%";
    } else if (e.key === "ArrowLeft") {
      left = Math.max(0, parseFloat(left) - step) + "%";
    } else if (e.key === "ArrowRight") {
      left = Math.min(100, parseFloat(left) + step) + "%";
    }

    if (myId) {
      setPlayers((prevPlayers) => ({
        ...prevPlayers,
        [myId]: {
          ...prevPlayers[myId],
          position: { top, left },
        },
      }));
      socket.emit("playerMovement", { position: { top, left } });
    }
  };

  const startGame = () => {
    setIsGameActive(true);
    setTimeLeft(30);
    moveBall();
  };

  useEffect(() => {
    if (isGameActive) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isGameActive, myId, players]);

  useEffect(() => {
    if (isGameActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
    }
  }, [isGameActive, timeLeft]);

  return (
    <div className="min-h-screen bg-quidditch-multi bg-cover bg-center flex flex-col items-center text-center relative">
      <audio
        src="https://syeongkim.github.io/madcamp_week4_front/musics/11_The_Quidditch_Match_Game.mp3"
        autoPlay
        loop
      />
      <h1 className="font-Harry text-gradient-red fixed top-0 w-full">
        Multi Mode
      </h1>
      <div className="fixed top-10 right-10 text-black text-xl font-Harry">
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
            {Object.keys(players).map((playerId) => (
              <div
                key={playerId}
                id={playerId}
                className="player"
                style={{
                  top: players[playerId].position.top,
                  left: players[playerId].position.left,
                }}
              ></div>
            ))}
          </>
        )}
      </div>
      {!isGameActive && timeLeft === 0 && (
        <div className="fixed bottom-20 text-white text-2xl font-Harry">
          Game Over!
        </div>
      )}
    </div>
  );
};

export default MultiMode;
