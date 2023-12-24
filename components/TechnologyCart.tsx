import React from "react";

interface TechnologyCartProps {
  tech: string;
  value: number;
}

const TechnologyCart: React.FC<TechnologyCartProps> = ({ tech, value }) => {
  return (
    <div className="flex w-[40%] p-3 justify-between bg-slate-500 rounded-lg">
      <p>{tech}</p>
      <p>{value}%</p>
    </div>
  );
};

export default TechnologyCart;
