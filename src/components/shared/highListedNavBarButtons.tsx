import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const highListedNavBarButtons = () => {

  const pathname = usePathname()

  return (
      <div className="flex items-end gap-12 text-[13.5px] font-medium text-[#8A90A2] max-lg:hidden">
        <div className="relative inline-block">
          <Link href={'/'} className={`relative ${pathname === "/" ? "text-black" : ""}`}>Home</Link>
          {pathname === "/" && <span
            className="absolute bottom-0 left-0 w-full h-[2.75px] top-6"
            style={{
              backgroundImage:
                "linear-gradient(to right, #5CA2D4 50%, #F3D251 50%)",
            }}
          ></span>}
        </div>

        <div className="relative inline-block">
          <Link href={'/faqs'} className={`relative ${pathname === "/faqs" ? "text-black" : ""}`}>FAQs</Link>
          {pathname === "/faqs" && <span
            className="absolute bottom-0 left-0 w-full h-[2.75px] top-6"
            style={{
              backgroundImage:
                "linear-gradient(to right, #5CA2D4 50%, #F3D251 50%)",
            }}
          ></span>}
        </div>

        <div className="relative inline-block">
          <Link href='all-course' className={`relative ${pathname === "/all-course" ? "text-black" : ""}`}>All Courses</Link>
          {pathname === "/all-course" && <span
            className="absolute bottom-0 left-0 w-full h-[2.75px] top-6"
            style={{
              backgroundImage:
                "linear-gradient(to right, #5CA2D4 50%, #F3D251 50%)",
            }}
          ></span>
          }
        </div>
      </div>
  );
};

export default highListedNavBarButtons;
