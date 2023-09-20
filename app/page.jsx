'use client'
import React, {FC, useState} from 'react'
import Heading from './components/Heading'
import Header from './components/Header'

const Page = () => {
  const [open, setOpen] = useState(false)
 const [activeItem, setActiveItem] = useState(1)
  return (
    <div>
      <Heading 
        title='ELearning'
        description='ELearning is a platform for students to learn and get help from teachers'
        keywords='Programing, MERN, Redux, Fullstack, Machine Learning'/>
        <Header 
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          />
    </div>
  )
}

export default Page