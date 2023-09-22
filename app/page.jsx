'use client'
import React, {FC, useState} from 'react'
import Heading from './components/Heading'
import Header from './components/Header'
import Hero from './components/Hero'
import CustomModel from './components/CustomModel'


const Page = () => {
  const [open, setOpen] = useState(false)
 const [activeItem, setActiveItem] = useState(1)
const [auth, setAuth] = useState('login')

  return (
    <div className="">

    <div className={`${open ? 'bg-black opacity-20' : 'blur-0'} `}>
      <Heading 
        title='ELearning'
        description='ELearning is a platform for students to learn and get help from teachers'
        keywords='Programing, MERN, Redux, Fullstack, Machine Learning'/>
        <Header 
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          />
          <Hero />
      
    </div>
    {open && (
            <CustomModel 
              setOpen={setOpen}
              auth={auth}
              setAuth={setAuth}
            />
          )}
    </div>
  )
}

export default Page