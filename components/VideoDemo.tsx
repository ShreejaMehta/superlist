'use client';
import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

const VideoDemo = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set a smaller initial scale factor and calculate the scale factor based on the scroll position
  const initialScaleFactor = 0.1;
  const scaleFactor = initialScaleFactor + scrollY * 0.000156;

  return (
    <div className="h-screen flex items-center justify-center ">
      <Card
        className="flex flex-row max-h-full w-11/12 bg-[#181824] rounded-[50px]  border-none px-24 pb-[10%]"
        style={{ transform: `scale(${scaleFactor})` }}
      >
        <div className="flex flex-col realtive mx-auto min-h-min overflow-hidden justify-center rounded-2xl">
          <p
            className="font-bold text-[80px] text-center leading-none p-10"
            style={{ color: '#dedeeb' }}
          >
            You've never <br />
            worked <span className="text-[#f84f39] ">this fast</span>
          </p>
        
          <Image
            src={"/demo.gif"}
            width={942}
            height={590}
            priority
            alt={"demo"}
            className="rounded-xl"
          />
        </div>
      </Card>
    </div>
  );
};

export default VideoDemo;
