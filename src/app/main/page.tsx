"use client";

import Link from "next/link";
import Logo from "../components/Logo";
import Button from "../components/Button";
import "./styles/main.css"; // Tailwind CSS는 별도로 구성되어야 함
import BackgroundMusic from "../components/BackgroundMusic";

export default function Main() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center space-y-4">
        <Logo />
        <Link href="/login">
          <Button className="text-gradient-yellow">Log in</Button>
        </Link>
        <Link href="/poll">
          <Button className="text-gradient-yellow">
            Sign Up: Find Your Hogwarts House
          </Button>
        </Link>
      </div>
      <audio
        src="https://syeongkim.github.io/madcamp_week4_front/musics/01_Prologue.mp3"
        autoPlay
        loop
      />
    </div>
  );
}
