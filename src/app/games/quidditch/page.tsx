// page.tsx
import React from "react";

const Quidditch: React.FC = () => {
  return (
    <div>
      <h1 className="text-white">quidditch</h1>
      <audio src="/musics/11_The_Quidditch_Match_Game.mp3" autoPlay loop />
    </div>
  );
};

export default Quidditch;
