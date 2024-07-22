interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  className?: string;
}

function Button({ children, type, onClick, className }: ButtonProps) {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
