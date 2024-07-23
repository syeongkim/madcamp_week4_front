import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <div className={`logo ${className}`}>
      <Image src="/images/logo.png" alt="Logo" />
    </div>
  );
}

export default Logo;
