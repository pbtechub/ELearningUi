import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Hero = () => {
  return (
   
        <div className="md:flex items-center px-[30px] md:px-[40px] py-[30px] bg-inherit">
            <div className="hidden md:flex  flex-1 items-center justify-left">
                <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-full bg-black p-4 flex items-center justify-center hero_animation">
                    <Image 
                    src={require('../../public/banner-img-1.png')}
                    className='object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-auto z-10'/>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <h2 className='dark:text-white text-[#000000c7] text-[30px] lg:text-[48px]  w-full  font-[600] font-Josefin 1000px:leading-[75px] '>
                    Improve your online Learning Experience Better Instantly
                </h2>
                
                <p className='dark:text-[#edfff4] text-[#000000c7] text-[18px] font-[600] font-Josefin'>
                    We have 40k+ Online courses & 500K+ Online registration student. Find your desired Courses from them.
                </p>
        
               
                <div className=" bg-transparent flex">
                    <input 
                    type='search'
                    placeholder='Search courses...'
                    className='bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-l-[5px] p-2 w-full h-full outline-none'/>
                    <div className="flex items-center justify-center cursor-pointer bg-[#39c1f3] rounded-r-[5px] w-[20%]">
                        <BiSearch className='text-white' size={20}/>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="rounded-[50%] w-[35px] h-[35px] bg-white flex items-center justify-center">
                        {/* <Image 
                        src={require('../../public/awcbrjuiapf5t5ajthwf.png')}
                        className='object-contain'/> */}
                    </div>
                    <div className="rounded-[50%] w-[35px] h-[35px] bg-white flex items-center justify-center ml-[-10px]">
                        {/* <Image 
                        src={require('../../public/kevin-wolf-gMK4KAoy2Qw-unsplash.jpg')}
                        className='object-contain'/> */}
                    </div>
                    <div className="rounded-[50%] w-[35px] h-[35px] bg-white flex items-center justify-center ml-[-10px]">
                        {/* <Image 
                        src={require('../../public/kevin-wolf-gMK4KAoy2Qw-unsplash.jpg')}
                        className='object-contain'/> */}
                    </div>
                    <p className='dark:text-[#edfff4] text-[#000000c7] text-[14px] font-[600] font-Josefin ml-3'>
                   500K+ People already trusted us. <Link href='/courses' className='dark:text-[#46e256] text-[crimson]'>View Courses</Link>
                </p>
                  
                </div>
            </div>
        </div>

  )
}

export default Hero