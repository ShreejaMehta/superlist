import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import Image from "next/image";

const renderPlatform = (imageSrc: string, label: string) => {
  return (
    <div className="platform">
      <Image
        src={imageSrc}
        width={100}
        height={100}
        priority
        alt={label}
        className="rounded-xl"
      />
      <p>{label}</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between rounded p-10">
      <Drawer>
        <DrawerTrigger className="hover:text-red text-[#72718a] rounded-full  m-10 text-lg ">
          Try Our Beta
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

      <Button
        className="border border-[#72718a] hover:text-red text-[#72718a] rounded-full  m-10 text-lg"
        variant="outline"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default Header;
