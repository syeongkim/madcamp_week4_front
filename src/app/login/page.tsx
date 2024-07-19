'use client';

import "./styles/login.css";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/poll');
  };

  return (
    <div className="body">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Logo className="mb-4"></Logo>
        <Button onClick={handleButtonClick}>Find Your Hogwart House</Button>
      </div>
    </div>
  );
}