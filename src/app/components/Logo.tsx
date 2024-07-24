import React from "react";
import Image from "../components/Image";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <div className={`logo ${className}`}>
      <Image
        src="https://syeongkim.github.io/madcamp_week4_front/images/logo.png"
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
