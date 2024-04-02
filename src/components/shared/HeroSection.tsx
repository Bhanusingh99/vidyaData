import React from "react";
import localFont from "next/font/local";
import { EnrollNowButton, WatchNowButton } from "./buttons/buttons"; // Corrected import and component names
import Image from "next/image";
import { Star } from "lucide-react";
import CompaniesLogo from "./CompaniesLogo";
import LandingPageIcons from "./LandingPageIcons";

// Define local fonts
const Pacifico = localFont({ src: "../fonts/Pacifico-Regular.ttf" });
const PlusJakartaSans = localFont({
  src: "../fonts/PlusJakartaSans-VariableFont_wght.ttf",
});
const dmSans = localFont({ src: "../fonts/DMSans-VariableFont_opsz,wght.ttf" });
const montserrat = localFont({
  src: "../fonts/Montserrat-VariableFont_wght.ttf",
});

const HeroSection = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background image container */}
      <div className="absolute z-0 w-full h-screen max-sm:mt-[-5rem]  flex items-center justify-center">
        <Image
          src={"/lineareffect.svg"}
          height={200}
          width={700}
          alt="effect"
          className="max-md:h-screen max-md:w-full"
        />
      </div>

      <LandingPageIcons/>

      {/* Main content container */}
      <div className="flex z-50 flex-col max-lg:w-[70%] max-sm:w-[80%] w-[65%] mx-auto items-center justify-center mt-16 max-lg:mt-12">
        {/* Section title */}
        <h2
          style={Pacifico.style}
          className={`text-[48px] text-[#6757A5] max-md:text-[32px] z-30`}
        >
          Online Courses
        </h2>
        {/* Section subtitle */}
        <h1
          style={PlusJakartaSans.style}
          className={`text-[75px] text-[#01103D] my-2 font-bold text-center max-md:text-[32px] z-30`}
        >
          Modern Data Engineering
        </h1>
        {/* Section description */}
        <p
          style={dmSans.style}
          className={`text-[18px] text-[#8A90A2] text-center my-4 max-md:text-[15px] max-sm:w-[75%] z-30`}
        >
          Dive into the Data Revolution with Comprehensive, Project-Based
          Learning. Transform Your Skills and Launch Your Career in Data
          Engineering - All Through a Hands-On, Step-by-Step Journey.
        </p>
        {/* Additional info */}
        <p
          style={dmSans.style}
          className={`text-[18px] max-md:text-[15px] text-[#8A90A2] text-center my-2 z-30`}
        >
          #Learn Data Engineering by Doing It
        </p>

        {/* Buttons */}
        <div className="w-full flex justify-center gap-10 mx-auto my-8">
          <EnrollNowButton />
          <WatchNowButton />
        </div>

        {/* Learners count */}
        <div className="z-50 my-2">
          <p
            className="text-[14px] font-medium text-[#8A90A2]"
            style={montserrat.style}
          >
            Over{" "}
            <span className="text-[16px] text-[#F68786] text-semibold">
              10k+ Learners{" "}
            </span>
            all over the world
          </p>
          <Image
            src={"/bended line.png"}
            height={40}
            width={120}
            alt="line"
            className="ml-8"
          />
        </div>

        {/* Rating */}
        <div className="w-[216px] h-[44px] my-3 z-50 flex justify-between items-center">
          <img src="/group sv.svg" alt=""/>
          <div className="h-[26px] w-[64px] rounded-[12px] bg-black flex gap-1 items-center justify-center">
            <p className="text-white text-[15px] font-bold">4.7</p>
            <Star color="white" size={14} />
          </div>
        </div>
      </div>

      <div className="absolute ml-[-29rem] mt-[-15rem] z-0 max-md:hidden">
        <Image
          src={"/darkeffect.svg"}
          height={200}
          width={693}
          alt="effect"
          className="max-md:h-[800px]"
        />
      </div>

      <div className="w-full z-50 h-[229px]  relative my-16 py-4 overflow-hidden max-md:mt-[-1rem]">
        <p
          style={PlusJakartaSans.style}
          className="text-center text-[24px] mt-8 font-bold text-black"
        >
          Learners now available at
        </p>
        <CompaniesLogo />
      </div>

      <div className="absolute right-[-32rem] rotate-12 mt-[-15rem] z-0 max-md:hidden">
        <Image
          src={"/darkeffect.svg"}
          height={200}
          width={693}
          alt="effect"
          className="max-md:h-[800px]"
        />
      </div>

      <div className="absolute right-10  mt-[-8rem] z-0 max-md:hidden">
        <Image
          src={"/plane.svg"}
          height={200}
          width={200}
          alt="effect"
          className="max-md:h-[800px]"
        />
      </div>


      <div className="w-full flex max-lg:flex-col z-50">
        <div className="w-[45%] flex justify-center items-center max-lg:w-full">
          <img src="/mendesign.svg" alt="" className="w-[653px] h-[623px] mt-[-5rem] max-md:mt-[-15rem] z-50" />
        </div>
        
        <div className="w-[55%]  max-lg:w-full max-md:mt-[-5rem] px-10 z-50">
          <h2 className="text-[40px] text-[#6757A5] max-md:text-[32px]" style={Pacifico.style}>About Darshil Parmar</h2>
          <h1 className="text-[48px] font-bold text-black my-4 max-md:text-[32px]" style={PlusJakartaSans.style}>Freelance Data Engineer & Content Creator</h1>
          <p className="text-[#8A90A2] text-[18px] my-4 max-md:text-[16px] w-[90%]">
            At Data Vidhya, we believe that the best way to learn is through
            hands-on practice and building projects
          </p>
          <p className="text-[#8A90A2] text-[18px] my-4 max-md:text-[16px] w-[90%]">
            That&apos;s why we offer courses that enable you to apply what you&apos;ve
            learned and see the results for yourself.
          </p>
          <p className="text-[#8A90A2] text-[18px] my-4 max-md:text-[16px] z-50 w-[90%]">
            With a strong understanding of fundamentals and modern data
            engineering tools, you&apos;ll be able to master high-demand skills and
            take your career to the next level
          </p>
        </div>
      </div>

    <div className="w-full z-10 relative mt-[-12rem]">
          <img src="/vector.jpg" alt="" className="w-full"/>
    </div>

    </div>
  );
};

export default HeroSection;
