interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className: string;
}

function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button className={`button ${className}`} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
