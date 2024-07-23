import React from "react";

interface DropdownProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Dropdown = ({ children, onClick, className }: DropdownProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Dropdown;
