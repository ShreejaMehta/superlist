
//TODO: Add transitions to image and chnage color of button minor changes 

"use client";
// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Interface for button information
interface ButtonInfo {
  label: string;
  image: string;
  color: string;
}

// Array of button information
const buttons: ButtonInfo[] = [
  {
    label: 'Team work',
    image: '/TeamWork.png',
      color:'#3f86cf',
  },
  {
    label: 'Personal Projects',
    image: '/PersonalLife.png',
    color:'#f84f39',
  },
  {
    label: 'Everything in Between',
    image: '/EverythingInBetween.png',
    color:'#2a966f',
  },
];

// Interface for component props
interface UseCasesProps {}

// Inline styles for the displayed image
const imageStyle: React.CSSProperties = {
  borderRadius: '4.5%',
  border: '1px solid #fff',
};

// Functional component for the use cases
const UseCases: React.FC<UseCasesProps> = () => {
  // State for the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State for the current displayed image
  const [currentImage, setCurrentImage] = useState<string>(buttons[0].image);

  // Function to handle button clicks and update the displayed image
  const handleButtonClick = (newImage: string) => {
    
    setCurrentImage(newImage);
  };

  // Effect to update the image automatically after a time interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index in a circular manner
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % buttons.length);
      // Set the current image based on the updated index
      setCurrentImage(buttons[currentImageIndex].image);
    }, 5000); // Change the interval time as needed (in milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentImageIndex]); // Include currentImageIndex as a dependency

  // JSX structure for the component
  return (
    <div className="grid items-center justify-center bg-[#f4f3fa]">
      <div className="flex flex-col items-center justify-center bg-[#f4f3fa]">
        {/* Logo images and text */}
        <Image src="/superlist.png" alt="Vercel Logo" width={140} height={34} priority />
        <Image src="/doodle.png" alt="Vercel Logo" width={140} height={34} priority />
        <p className="font-bold text-8xl text-[#26253b] text-center">Home to</p>
        <p className="font-bold text-8xl text-[#26253b] text-center">
          all your <span className="text-[#f84f39]">Lists</span>
        </p>

        {/* Buttons for different use cases */}
        <div>
          {buttons.map((button, index) => (
            <Button
              key={index}
              className="border border-[#72718a] hover:text-red text-[#72718a] rounded-full m-10 text-lg"
              variant="ghost"
              onClick={() => handleButtonClick(button.image)}
            >
              {button.label}
            </Button>
          ))}
        </div>

        {/* Displayed image */}
        <Image
          src={currentImage}
          alt="Displayed Image"
          width={1400}
          height={1400}
          priority
          style={imageStyle}
        />
      </div>
    </div>
  );
};

// Export the component
export default UseCases;
