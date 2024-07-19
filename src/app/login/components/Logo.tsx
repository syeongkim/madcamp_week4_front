import React from 'react';

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <div className={`logo mb-8 ${className}`}>
      <img src="/images/logo.png" alt="Logo" />
    </div>
  );
}

export default Logo;