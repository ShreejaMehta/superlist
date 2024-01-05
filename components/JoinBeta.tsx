"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";

const JoinBeta: React.FC = () => {
  const themeColors: string[] = ["#f84f39", "#3f86cf", "#2a966f", "#6b66da"];

  const getRandomColor = (): string => {
    const randomIndex: number = Math.floor(Math.random() * themeColors.length);
    return themeColors[randomIndex];
  };

  const [backgroundColor, setBackgroundColor] = useState<string>("#3f86cf");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  let timeoutId: NodeJS.Timeout;

  const renderPlatform = (imageSrc: string, label: string) => {
    return (
      <div className="platform">
        <Image src={imageSrc} width={100} height={100} priority alt={label} className="rounded-xl" />
        <p>{label}</p>
      </div>
    );
  };


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
      <Drawer>
        <DrawerTrigger
          className={` w-11/12 h-5/6 rounded-full text-[40px] text text-[#fff] transform ${
            isHovered ? "scale-105" : ""
          } transition-all duration-300 ease-in-out`}
          style={{
            background: backgroundColor,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          Join Our Beta
        </DrawerTrigger>
        <DrawerContent className="bg-white">
          <DrawerTitle>Available On</DrawerTitle>
          <DrawerDescription className="flex justify-center items-center space-x-4">
            {/* Platform icons and labels */}
            {renderPlatform("/Apple.png", "MacOS")}
            {renderPlatform("/Web.png", "Web")}
            {renderPlatform("/ios.png", "iOS")}
            {renderPlatform("/Android.png", "Android")}
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default JoinBeta;
