// Import necessary libraries and components
import React from "react";
import Image from "next/image";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title1: string;
  title2: string;
  title3: string;
  src: string;
  color: string;
  i: number;
}

const CardComponent: React.FC<CardProps> = ({
  title1,
  title2,
  title3,
  src,
  color,
  i,
}) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 p-24">
      <Card className="flex flex-row border-2 max-w-max max-h-fit bg-[#fff] rounded-[50px]">
        <div className="flex flex-col realtive mx-auto min-h-min overflow-hidden justify-center w-1/2 rounded-2xl">
        <p
            className="font-bold text-3xl text-center"
            style={{ color: color }}
          >
            {title1}
          </p>
          <p className="font-bold text-3xl text-center">{title2}</p>
          <p className="font-bold text-3xl text-center">{title3}</p>
        </div>

        <div className="flex flex-col justify-center w-1/2 relative mx-auto overflow-hidden">
          <img
            className="object-contain rounded-[50px]"
            src={src}
            alt="Daily todo"
          />
        </div>
      </Card>
      {/* <div
        className={`flex flex-col relative h-[500px] w-[1000px] rounded-2xl p-10 transform origin-top bg-${color}`}
      >
        <h2 className="text-center text-4xl mb-4">{title}</h2>
        <div className="flex h-full mt-10 gap-10">
          <div className="w-2/5 relative top-10">
          
          </div>

          <div className="w-3/5 relative">
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <Image fill src={src} alt="image"  />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CardComponent;
