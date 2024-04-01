"use client";
import Image from "next/image";
import React, { useState } from "react";
import HighListedNavBarButtons from "../shared/highListedNavBarButtons";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./mobileNavbar";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add additional logic here to toggle the dark/light mode styles
  };

  return (
    <nav className="w-full h-[4.5rem] border-b-[1px] items-center flex justify-between px-[3.25rem] max-lg:px-4">
      <div>
        <Image src={"/diff-logo.png"} height={90} width={90} alt="logo" />
      </div>

      <div className="w-[92%] max-xl:w-[90%] flex justify-between px-4 max-lg:justify-end">

        <HighListedNavBarButtons />

        <div className="flex gap-6">

        <div className="flex gap-3 items-center">
         <Moon size={20} color="#C6CBD9" className="mt-1"/>
          <div
            className={`relative inline-block ${isDarkMode ? "dark" : "light"}`}
          >
            <button
              className="bg-gray-300 dark:bg-gray-600 w-12 h-5 rounded-full focus:outline-none"
              onClick={toggleMode}
            >
              <span
                className={`absolute left-0 top-[5px] inline-block w-6 h-6 bg-black  rounded-full transition-transform duration-300 ease-in-out transform ${
                  isDarkMode ? "translate-x-full" : ""
                }`}
              ></span>
            </button>

            
          </div>
          <Sun color="#F98A87" size={20} className="mt-1"/>

        </div>
          
        <Link href={'/'} className="bg-[#F98A87] px-4 py-2 text-[14px] text-white rounded-[8px] font-medium max-lg:hidden">
            contact Now
        </Link>

        <Link href={'/'} className="px-6 py-2 text-[14px] text-black rounded-[8px] font-medium shadow-lg max-lg:hidden">
            Sign in
        </Link>

        <MobileNavbar/>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;