import Image from 'next/image'
import React from 'react'

const CompaniesLogo = () => {
  return (
    <div className='w-full flex gap-[4.5rem] max-md:gap-12 py-10 px-14 max-md:px-0'>
        <Image src={"/companyLogo/zepline logo.svg"} alt='logos' height={13} width={137} />
        <Image src={"/companyLogo/oraclelogo.svg"} alt='logos' height={13} width={137} />
        <Image src={"/companyLogo/morphuslogo.svg"} alt='logos' height={13} width={137} />
        <Image src={"/companyLogo/samsunglogo.svg"} alt='logos' height={13} width={137} />
        <Image src={"/companyLogo/mondeylogo.svg"} alt='logos' height={13} width={137} />
        <Image src={"/companyLogo/segmentlogo.svg"} alt='logos' height={13} width={137} />
        <Image src={"/companyLogo/protonetlogo.svg"} alt='logos' height={13} width={137} />
    </div>
  )
}

export default CompaniesLogo