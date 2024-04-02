import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import localFont from "next/font/local";
const dmSans = localFont({ src: "../fonts/DMSans-VariableFont_opsz,wght.ttf" });


const NavItem = ({ href, text, isActive }:any) => {
  return (
    <div className="relative inline-block">
      <Link href={href} className={`relative ${isActive ? "text-black" : ""}`}>{text}</Link>
      {isActive && (
        <span
          className="absolute bottom-0 left-0 w-full h-[3px] top-6"
          style={{
            backgroundImage:
              "linear-gradient(to right, #5CA2D4 50%, #F3D251 50%)",
          }}
        ></span>
      )}
    </div>
  );
};

const HighListedNavBarButtons = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-end gap-12 text-[18px] font-medium text-[#8A90A2] max-lg:hidden">
      <NavItem href="/" text="Home" isActive={pathname === "/"} style={dmSans.style}/>
      <NavItem href="/faqs" text="FAQs" isActive={pathname === "/faqs"} style={dmSans.style}/>
      <NavItem href="/all-course" text="All Courses" isActive={pathname === "/all-course"} style={dmSans.style}/>
    </div>
  );
};

export default HighListedNavBarButtons;
