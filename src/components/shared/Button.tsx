import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div
      className="px-6 py-3 bg-purple-600 border-none 
  overflow-hidden rounded-full text-white cursor-pointer min-w-max"
    >
      {label}
    </div>
  );
};

export default Button;
