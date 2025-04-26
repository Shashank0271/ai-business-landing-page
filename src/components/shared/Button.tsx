import React from "react";

interface ButtonProps {
  label: string;
  wrapperStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ label, wrapperStyle = "" }) => {
  return (
    <div
      className={`px-6 py-3 bg-purple-600 border-none text-center overflow-hidden
                 rounded-full text-white cursor-pointer min-w-max ${wrapperStyle}`}
    >
      {label}
    </div>
  );
};

export default Button;
