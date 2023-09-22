
import { Box, Modal } from '@mui/material'
import React, { useRef } from 'react'
import Login from './Login'
import Registration from './Registration'
import { useClickOutside } from '../utils/useClick'
import VerifyEmail from './VerifyEmail'

const CustomModel = ({setOpen, auth, setAuth}) => {
    
    const modalRef = useRef()
    useClickOutside(modalRef, false, setOpen)
  return (
    <div
    ref={modalRef}
    className=' bg-black opacity-1'
    >
        <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 dark:bg-slate-900 rounded-lg shadow p-8 outline-none w-[400px] text-white bg-white">
            {auth === 'login' && ( <Login setAuth={setAuth}/>)}
            {auth === 'registration' &&  (<Registration setAuth={setAuth}/>)}
            {auth === 'verifyEmail' &&  (<VerifyEmail setAuth={setAuth}/>)}
          
        </Box>
    </div>
   
  )
}

export default CustomModel