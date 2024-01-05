import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image'
const VideoDemo = () => {
  return (
    // fix spaceing between buttons
    <div className="h-screen flex items-center justify-center">
    <Card className="flex flex-row border-2 max-h-full w-11/12 bg-[#181824] rounded-[50px] px-24 pb-[10%]" >
    <div className="flex flex-col realtive mx-auto min-h-min overflow-hidden justify-center rounded-2xl">
          <p
            className="font-bold text-[80px] text-center leading-none" 
            style={{ color: '#dedeeb'}} >
            You've never <br />
            worked <span className="text-[#f84f39] ">this fast</span> 
          </p>

          <Image src={"/demo.gif"}  
          width={942}
          height={590}
          priority
          alt={"demo"}
          className="rounded-xl "
          />
        </div>
    </Card>
  </div>
  )
}

export default VideoDemo