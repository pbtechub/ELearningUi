"use Client";
import Link from "next/link";
import React, { useState } from "react";
import NavItems from "./NavItems";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from 'react-icons/hi'
import Sidebar from "./Sidebar";

const Header = ({ open, setOpen, activeItem }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  if (typeof window !== 'undefined') {
    if (window.scrollY > 800) {
        setActive(true)
    } else {
        // setActive(false)
    }
  }
  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[95%] 800px:[92%] m-auto py-2 h-full">
          <div className="w-full h-[80px] flex items-center justify-between p-3">
            <div>
              <Link href="/" className="text-[25px] font-Poppins font-[500] text-black dark:text-white">
                pbtechub
              </Link>
            </div>
            <div className="flex items-center">
              <NavItems 
                activeItem={activeItem}
                isMobile={false}/>
              <ThemeSwitcher />
              <div className="md:hidden">
                <HiOutlineMenuAlt3 
                className="cursor-pointer dark:text-white text-black md:hidden"
                size={25}
                onClick={()=> setOpenSidebar(true)}/>
              </div>
              <HiOutlineUserCircle 
                className="hidden md:block cursor-pointer dark:text-white text-black z-50"
                size={25}
                onClick={()=> setOpen(true)}/>
            </div>
          </div>
        </div>
        {
          openSidebar && (
         <Sidebar 
         activeItem={activeItem}
         setOpenSidebar={setOpenSidebar}
         setOpen={setOpen}/>
          )
        }
      </div>
    </div>
  );
};

export default Header;
