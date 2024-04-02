import Image from 'next/image'
import React from 'react'

const LandingPageIcons = () => {
  return (
    <div className="absolute w-full h-[90vh] bg-transparent z-20 flex">
    <div className="w-[35%] h-[100%]">
          <div className=" w-full h-[25%] flex items-center justify-center max-md:items-start py-2">
             <div className="w-[81px] h-[81px] max-md:w-[39px] max-md:h-[39px] shadow-lg rounded-full flex items-center justify-center">
                <Image src={"/landingPageIcons/blueicon.svg"} height={32} width={32} alt="logo" className="max-md:w-[15px] max-md:h-[15px]"/>
             </div>
          </div>

          <div className=" w-full h-[25%] flex items-center justify-start px-10 max-md:px-2 max-md:items-start">
             <div className="w-[118px] h-[118px] max-md:w-[60px] max-md:h-[60px] shadow-xl rounded-full flex items-center justify-center">
                <Image src={"/landingPageIcons/AWS-logo 1.svg"} height={39} width={63} alt="logo" className="max-md:w-[30px] max-md:h-[30px]"/>
             </div>
          </div>

          <div className=" w-full h-[25%] flex items-center justify-end px-10 z-20 max-md:items-start max-md:justify-start max-md:px-6">
             <div className="w-[81px] h-[81px] max-md:w-[39px] max-md:h-[39px] shadow-lg rounded-full flex items-center justify-center mr-20 max-md:mr-8">
                <Image src={"/landingPageIcons/vuelogo.svg"} height={43} width={42} alt="logo" className="max-md:w-[15px] max-md:h-[15px]"/>
             </div>
          </div>

          <div className=" w-full h-[25%] flex items-center justify-end px-10 max-md:items-start max-md:justify-start max-md:px-4">
             <div className="w-[81px] h-[81px] max-md:w-[39px] max-md:h-[39px] shadow-lg rounded-full flex items-center justify-center mr-32 max-md:mr-5 max-md:mt-[-2rem]">
                <Image src={"/landingPageIcons/microsoftlogo.svg"} height={43} width={42} alt="logo" className="max-md:w-[15px] max-md:h-[15px]"/>
             </div>
          </div>

    </div>

    <div className="w-[35%] h-[100%] "></div>

    <div className="w-[30%] h-[100%]">
          <div className=" w-full h-[20%] flex items-center justify-center max-md:items-start py-2">
             <div className="w-[81px] h-[81px] max-md:w-[39px] max-md:h-[39px] shadow-lg rounded-full flex items-center justify-center">
                <Image src={"/landingPageIcons/googlelogo.svg"} height={32} width={32} alt="logo" className="max-md:w-[15px] max-md:h-[15px]"/>
             </div>
          </div>

          <div className=" w-full h-[20%] flex items-start justify-end px-10 max-md:px-2 max-md:items-start">
             <div className="w-[104px] h-[104px] max-md:w-[56px] max-md:h-[56px] shadow-xl rounded-full flex items-center justify-center">
                <Image src={"/landingPageIcons/htmllogo.svg"} height={44} width={50} alt="logo" className="max-md:w-[24px] max-md:h-[27px]"/>
             </div>
          </div>


          <div className=" w-full h-[20%] flex items-center justify-center px-10 z-20 max-md:items-start max-md:justify-end max-md:px-0">
             <div className="w-[62px] h-[62px] max-md:w-[43px] max-md:h-[43px] shadow-lg rounded-full flex items-center justify-center mr-20 max-md:mr-8">
                <Image src={"/landingPageIcons/vscodelogo.svg"} height={33} width={32} alt="logo" className="max-md:w-[22px] max-md:h-[22px]"/>
             </div>
          </div>

          <div className=" w-full h-[20%] flex items-center justify-end px-10 z-20 max-md:items-start max-md:justify-end max-md:px-0">
             <div className="w-[75px] h-[75px] max-md:w-[39px] max-md:h-[39px] shadow-lg rounded-full flex items-center justify-center mr-20 max-md:mr-2">
                <Image src={"/landingPageIcons/drivelogo.svg"} height={41} width={35} alt="logo" className="max-md:w-[15px] max-md:h-[15px]"/>
             </div>
          </div>

          <div className=" w-full h-[20%] flex items-center justify-start px-10 max-md:items-start max-md:justify-end max-md:px-4">
             <div className="w-[123px] h-[123px] max-md:w-[57px] max-md:h-[57px] shadow-lg rounded-full flex items-center justify-center mr-0 max-md:mr-5 max-md:mt-[-2rem]">
                <Image src={"/landingPageIcons/pythonlogo.svg"} height={43} width={42} alt="logo" className="max-md:w-[27px] max-md:h-[27px]"/>
             </div>
          </div>

    </div>
</div>
  )
}

export default LandingPageIcons