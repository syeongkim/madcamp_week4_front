import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!audioContext) {
      setAudioContext(new (window.AudioContext || (window as any).webkitAudioContext)());
    }
  }, [audioContext]);

  useEffect(() => {
    if (!audioContext) return;

    let startTime = 0;
    let endTime: number | null = null;
    let audioSrc = "";

    switch (pathname) {
      case "/poll":
      case "/signup":
        audioSrc = "/musics/08_Mr_Longbottom_Flies.mp3";
        break;
      case "/dorms":
        audioSrc = "/musics/07_Entry_Into_The_Great_Hall_And_The_Banquet.mp3";
        break;
      case "/potion-game":
        audioSrc = "/musics/02_Harrys_Wonderous_World.mp3";
        break;
      case "/magic-game":
        audioSrc = "/musics/19_Hedwigs_Theme.mp3";
        startTime = 152; // 2:32 in seconds
        break;
      case "/quidditch-game":
        audioSrc = "/musics/11_The_Quidditch_Match.mp3";
        endTime = 60; // Example split
        break;
      default:
        audioSrc = "/musics/01_Prologue.mp3";
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = audioSrc;
      audioRef.current.loop = false; // No loop for pre-edited sections
      audioRef.current.currentTime = pathname === "/poll" ? currentTime : 0;

      const playAudio = async () => {
        try {
          await audioRef.current?.play();

          if (startTime > 0 || endTime !== null) {
            const track = audioContext.createMediaElementSource(audioRef.current!);
            const gainNode = audioContext.createGain();
            track.connect(gainNode).connect(audioContext.destination);

            audioRef.current!.currentTime = startTime;
            gainNode.gain.setValueAtTime(1, audioContext.currentTime);

            if (endTime !== null) {
              setTimeout(() => {
                audioRef.current?.pause();
              }, (endTime - startTime) * 1000);
            }
          }
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      };

      document.addEventListener('click', playAudio);
      document.addEventListener('keydown', playAudio);

      return () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
          audioRef.current.pause();
        }
        document.removeEventListener('click', playAudio);
        document.removeEventListener('keydown', playAudio);
      };
    }
  }, [pathname, audioContext, currentTime]);

  return <audio ref={audioRef} preload="auto" />;
};

export default BackgroundMusic;
