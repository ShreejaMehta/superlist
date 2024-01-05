// Import necessary libraries and components
'use client';
import React, { useState } from "react";
interface ListProps {
  text: string;
  desc: string;
  i: number;
}

const ListView: React.FC<ListProps> = ({ text, desc, i }) => {
  const [isHovered, setIsHovered] = useState(false);

  const opacity = 1 - i * 0.08;
    const themeColors = ["#f84f39", "#3f86cf", "#2a966f","#6b66da"];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * themeColors.length);
    return themeColors[randomIndex];
  };
  return (
    <div className="flex items-center justify-left top-0 px-24 bg-[#181824]">
      <p
        className="font-bold text-[80px] text-center relative"
         style={{ color: isHovered ? getRandomColor() : `rgba(222, 238, 235, ${opacity})` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        {isHovered && (
          <span className="absolute left-full top-1/2 transform -translate-y-1/2 p-4 text-white text-left rounded-md font-light" style={{ width: "200px", fontSize: "12px" }}>
            {desc}
          </span>
        )}
      </p>
    </div>
  );
};

export default ListView;
