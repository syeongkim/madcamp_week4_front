// components/BackgroundMusic.tsx
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    if (audioRef.current) {
      // Stop and reset the audio
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Determine which audio to play based on the route
    const audioSrc =
      currentPath === "/dorms"
        ? "/musics/07_Entry_Into_The_Great_Hall_And_The_Banquet.mp3"
        : "/musics/01_Prologue.mp3";

    console.log("Current Path:", currentPath);
    console.log("Audio Source:", audioSrc);

    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      audioRef.current.loop = true; // Loop the audio
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }

    return () => {
      // Cleanup: Pause the audio when the component is unmounted
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [currentPath]);

  return <audio ref={audioRef} preload="auto" />;
};

export default BackgroundMusic;
