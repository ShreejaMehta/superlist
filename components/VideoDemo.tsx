import React from 'react'
import { Button } from "@/components/ui/button"


const Header = () => {
  return (
    // fix spaceing between buttons
    <div className="flex justify-between rounded p-10" >
        <Button className="hover:text-red text-[#72718a] rounded-full  m-10 text-lg" variant="ghost">Try Our Beta</Button>
        <Button className="border border-[#72718a] hover:text-red text-[#72718a] rounded-full  m-10 text-lg" variant="outline">Sign Up</Button>
    </div>
  )
}

export default Header