import Link from "next/link";

export const EnrollNowButton = () => {
    return (
        <Link href='/' className="z-50 flex items-center enrollbtnShadow bg-[#5CA2D4] h-[70px] w-[240px] rounded-xl max-md:w-[169.9px] max-md:h-[49.56px]">
            <span className="h-[54px] w-[30px] max-md:w-[21.5px] max-md:h-[32px] max-md:ml-[.79px] bg-[#F3D251] rounded-r-[2rem]"></span>
            <button className="w-[80%] h-[100%] flex items-center justify-center text-white text-[18px] max-md:text-[16px]  font-bold">
            Enroll Now
            </button>
        </Link>
    );
};

export const WatchNowButton = () => {
    return (
        <Link href={'/'} className=" z-50 flex  items-center h-[70px] w-[240px] max-md:w-[169.9px] max-md:h-[49.56px]">
            <div className="w-[70px] h-[70px] max-md:w-[50px] max-md:h-[49px] rounded-full shadow flex items-center justify-center bg-[#FFFFFF]">
                <div className="bg-[#F98A87] h-[24px] w-[24px] triagleShape rotate-90 max-md:w-[17px] max-md:h-[17px]">
                </div>
            </div>
            <div className="w-[60%] max-sm:w-[70%] flex items-center justify-center">
                <p className="text-[18px] font-bold max-md:text-[14px] ml-1">Watch now</p>
            </div>
        </Link>
    );
};
