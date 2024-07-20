import Link from "next/link";
import Logo from "../components/Logo";
import Button from "../components/Button";
import "./styles/login.css"; // Tailwind CSS는 별도로 구성되어야 함

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center space-y-4">
        <Logo />
        <Link href="/login">
          <Button>Log in</Button>
        </Link>
        <Link href="/poll">
          <Button>Sign Up: Find Your Hogwarts House</Button>
        </Link>
      </div>
    </div>
  );
}
