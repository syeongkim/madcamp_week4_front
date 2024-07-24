import React from "react";
import Link from "next/link";
import './styles/quidditch.css';

const Quidditch: React.FC = () => {
  return (
    <div className="min-h-screen bg-quidditch-background bg-cover bg-center flex flex-col items-center text-center relative">
      <h1 className="font-Harry text-gradient-red fixed top-0 w-full mt-4">quidditch</h1>
      <div className="flex-grow flex items-center justify-center">
        <div className="flex space-x-12 font-Harry">
          <Link href="/games/quidditch/singlemode">
            <button className="btn-quidditch">Single Mode</button>
          </Link>
          <Link href="/games/quidditch/multimode">
          <button className="btn-quidditch">Multi Mode</button>
          </Link>
        </div>
      </div>
      <audio src="/musics/11_The_Quidditch_Match_Game.mp3" autoPlay loop />
    </div>
  );
};

export default Quidditch;
