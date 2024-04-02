import React from "react";
import localFont from "next/font/local";
import { EnrollNowButton, WatchNowButton } from './buttons/buttons'; // Corrected import and component names
import Image from "next/image";

const Pacifico = localFont({ src: "../fonts/Pacifico-Regular.ttf" });
const PlusJakartaSans = localFont({
  src: "../fonts/PlusJakartaSans-VariableFont_wght.ttf",
});
const dmSans = localFont({ src: "../fonts/DMSans-VariableFont_opsz,wght.ttf" });

const HeroSection = () => {
  return (
    <div className="w-full relative">

       <div className="absolute z-0 w-full h-[100%] mt-10 flex items-center justify-center">
        <Image src={'/morphism effect.png'} height={800} width={800} alt="effect"/>
       </div>

      <div className="flex z-50 flex-col max-lg:w-[70%] max-sm:w-[90%] w-[65%] mx-auto items-center justify-center mt-16 max-lg:mt-12">
        <h2 style={Pacifico.style} className={`text-[48px] text-[#6757A5] max-md:text-[32px]`}>
          Online Courses
        </h2>
        <h1
          style={PlusJakartaSans.style}
          className={`text-[75px] text-[#01103D] my-2 font-bold text-center max-md:text-[32px]`}
        >
          Modern Data Engineering
        </h1>
        <p style={dmSans.style}
          className={`text-[18px] text-[#8A90A2]  text-center my-4 max-md:text-[15px] max-sm:w-[80%]`}>
          Dive into the Data Revolution with Comprehensive, Project-Based
          Learning. Transform Your Skills and Launch Your Career in Data
          Engineering - All Through a Hands-On, Step-by-Step Journey.
        </p>
        <p style={dmSans.style}
          className={`text-[18px] max-md:text-[15px] text-[#8A90A2]  text-center my-2`}>#Learn Data Engineering by Doing It</p>

        <div className="w-full flex justify-center gap-10 mx-auto my-8">
          <EnrollNowButton/> {/* Corrected component name */}
          <WatchNowButton/> {/* Corrected component name */}
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
