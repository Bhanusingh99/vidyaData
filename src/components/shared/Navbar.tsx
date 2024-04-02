"use client"
import React, { useState } from "react";
import Image from "next/image";
import HighListedNavBarButtons from "../shared/highListedNavBarButtons";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./mobileNavbar";
import localFont from "next/font/local";
const dmSans = localFont({ src: "../fonts/DMSans-VariableFont_opsz,wght.ttf" });


const DarkModeToggle = ({ isDarkMode, toggleMode }:any) => {
  return (
    <div className="flex gap-3 items-center">
      <Moon size={22} color="#C6CBD9" className="mt-1" />
      <div className={`relative inline-block ${isDarkMode ? "dark" : "light"}`}>
        <button className="bg-gray-300 dark:bg-gray-600 w-12 h-5 rounded-full focus:outline-none" onClick={toggleMode}>
          <span className={`absolute left-0 top-[5px] inline-block w-6 h-6 bg-black rounded-full transition-transform duration-300 ease-in-out transform ${isDarkMode ? "translate-x-full" : ""}`}></span>
        </button>
      </div>
      <Sun color="#F98A87" size={22} className="mt-1" />
    </div>
  );
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    // Additional logic for dark/light mode styles can be added here
  };

  return (
    <nav className="w-full h-[4.75rem] border-b-[1px] items-center flex justify-between px-[3.5rem] max-lg:px-4">
      <div>
        <Image src="/vidyalogo.svg" height={111} width={111} alt="logo" />
      </div>

      <div className="w-[92%] max-xl:w-[90%] flex justify-between px-4 max-lg:justify-end">
        <HighListedNavBarButtons />

        <div className="flex gap-6">
          <DarkModeToggle isDarkMode={isDarkMode} toggleMode={toggleMode} />

          <Link href="/contact" style={dmSans.style} className="bg-[#F98A87] flex items-center justify-center h-[39px] w-[139px] text-[16px] text-white rounded-[8px] font-bold max-lg:hidden">
            Contact Now
          </Link>

          <Link href="/signin" style={dmSans.style} className="flex items-center justify-center h-[39px] w-[139px] text-[16px] signInShadow text-black rounded-[8px] font-bold max-lg:hidden">
            Sign In
          </Link>

          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
