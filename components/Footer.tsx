import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#181824] p-40">
      <div className="flex bg-[#272737] p-24 rounded-xl">
        {/* First Row */}
        <div className="mr-8 flex-grow">
          <div className="mt-4 text-white">
            <p className="text-primary text-xl mb-2">Superlist</p>
            <p className="mb-1">Home</p>
            <p className="mb-1">Updates</p>
            <p className="mb-1">Pricing</p>
            <p className="mb-1">Careers</p>
            <p className="mb-1">Suggestions</p>
            <p className="mb-1">Help Center</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="mr-8 flex-grow">
          <div className="mt-4 text-white">
            <p className="text-[#272737] text-xl mb-2">Superlist</p>
            <p className="mb-1">Open Source</p>
            <p className="mb-1">Cookies</p>
            <p className="mb-1">Privacy</p>
            <p className="mb-1">Terms</p>
            <p className="mb-1">Contact</p>
          </div>
        </div>
        
        {/* Third Row */}
        <div className="flex-grow">
          <div className="mt-4 text-white">
            <p className="text-secondary text-xl mb-2">App</p>
            <p className="mb-1">Mac</p>
            <p className="mb-1">Web</p>
            <p className="mb-1">iOS</p>
            <p className="mb-1">Android</p>
          </div>
        </div>

        {/* Fourth Row */}
        <div className="flex-grow">
          <div className="mt-4 text-white">
            <p className="text-tertiary text-xl mb-2">Socials</p>
            <p className="mb-1">Github</p>
            <p className="mb-1">LinkedIn</p>
            <p className="mb-1">Instagram</p>
            <p className="mb-1">X</p>
          </div>
        </div> 

        {/* Fifth Row */}
        <div className="flex-grow">
             <p className="text-quaternary text-xl mb-2">Updates</p>
          <div className="mt-4 text-white bg-[#303041] p-2 rounded-xl w-[213px] h-[213px]">
            <p className="mb-1 text-[30px] ">Quickly Add new tasks in lists 👉</p>
            <button className="bg-quaternary p-2 rounded-full">
                V 0.33
            </button>
          </div>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
