import Link from 'next/link'
import React from 'react'
import { navLinks } from '../assets/data'



const NavItems = ({activeItem, isMobile}) => {
  return (
    <>
        <div className="hidden md:flex">
            {navLinks?.map((item, index)=> (
                <Link href={`${item.url}`} key={index}>
                    <span className={`${activeItem === index ? 'dark:text-[#37a39a] text-[crimson]' : 
                    'dark:text-white text-black'} text-[14px] lg:text-[18px] px-6 font-Poppins font-[400]`}>
                        {item.name}
                        
                    </span>
                </Link>
            ))}
        </div>
        {/* {isMobile && 
            <div className="800px:hidden mt-5">
                <div className="w-full text-center py-6">
                {navLinks?.map((item, index)=> (
                <Link href={`${item.url}`} key={index}>
                    <span className={`${activeItem === index ? 'dark:text-[#37a39a] text-[crimson]' : 
                    'dark:text-white text-black'} block py-5 text-[18px] px-6 font-Poppins font-[400]`}>
                        {item.name}
                        
                    </span>
                </Link>
            ))}
                </div>
            </div>
        } */}
    </>
  )
}

export default NavItems