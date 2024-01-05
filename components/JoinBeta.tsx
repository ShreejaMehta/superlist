'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const JoinBeta: React.FC = () => {
  const themeColors: string[] = ["#f84f39", "#3f86cf", "#2a966f", "#6b66da"];

  const getRandomColor = (): string => {
    const randomIndex: number = Math.floor(Math.random() * themeColors.length);
    return themeColors[randomIndex];
  };

  const [backgroundColor, setBackgroundColor] = useState<string>("#f84f39");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  let timeoutId: NodeJS.Timeout;

  const handleMouseMove = (): void => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setBackgroundColor(getRandomColor());
      setIsHovered(true);
    }, 50);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center items-center bg-[#181824] h-screen">
      <button
        className={`h-4/6 w-9/12 rounded-full text-[40px] text text-[#fff] transform ${
          isHovered ? 'scale-110' : ''
        } transition-all duration-300 ease-in-out`}
        style={{
          background: backgroundColor,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        Join Our Beta
      </button>
    </div>
  );
};

export default JoinBeta;
