import React from "react";
import { navLinks } from "../assets/data";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import ThemeSwitcher from "./ThemeSwitcher";
import { HiOutlineUserCircle } from "react-icons/hi";

const Sidebar = ({ activeItem, setOpenSidebar, setOpen }) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 z-99999 dark:bg-[#131313]  bg-[#fff] md:w-[85%]">
      <div className="800px:hidden mt-10">
     
        <div className="w-full text-center py-6">
          {navLinks?.map((item, index) => (
            <Link href={`${item.url}`} key={index}>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson]"
                    : "dark:text-white text-black"
                } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
              >
                {item.name}
              </span>
            </Link>
          ))}


          <div className="absolute top-5 right-5">
            <AiOutlineClose
              className="cursor-pointer dark:text-white text-black"
              size={25}
              onClick={() => setOpenSidebar(false)}
            />
          </div>
        </div>
        <div className="w-full flex items-center">
            <ThemeSwitcher />
            <HiOutlineUserCircle 
                    className=" cursor-pointer dark:text-white text-black"
                    size={25}
                    onClick={()=> setOpen(true)}/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
