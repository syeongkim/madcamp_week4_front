import React from 'react';

interface DropdownProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Dropdown = ({ children, onClick, className }: DropdownProps) => {
    return (
        <div className={className} onClick={onClick}>
            { children }
        </div>
    )
};

export default Dropdown;