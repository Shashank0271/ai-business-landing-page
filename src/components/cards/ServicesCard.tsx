import React from "react";

interface ServicesCardProps {
  heading: string;
  content: string;
  wrapperStyle?: string;
  svg: React.ReactElement;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  content,
  heading,
  svg,
  wrapperStyle = "",
}) => {
  return (
    <div
      className={`border mx-2 my-2 rounded-2xl md:p-4 p-8 shadow-xl ${wrapperStyle}`}
    >
      {svg}
      <h2 className="font-semibold text-xl my-6">{heading}</h2>
      <p className="font-normal text-lg">{content}</p>
    </div>
  );
};

export default ServicesCard;
