import React from "react";
import { useRouter } from 'next/router';
import '../styles/quidditch.css';

const MultiMode: React.FC = () => {
  return (
    <div className="min-h-screen bg-quidditch-multi bg-cover bg-center flex flex-col items-center text-center relative">
      <h1 className="font-Harry text-gradient-red fixed top-0 w-full">Multi Mode</h1>
      <div className="flex-grow flex items-center justify-center">
        <p className="text-white text-xl">Welcome to Multi Mode!</p>
      </div>
    </div>
  );
};

export default MultiMode;
