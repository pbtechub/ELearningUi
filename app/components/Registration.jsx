import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useState } from 'react'
import { styles } from '../utils/styles'
import { AiFillGithub, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'


const schema = Yup.object().shape({
    email: Yup.string().required('Please enter your name!'),
    email: Yup.string().email('Invalid email').required('Please enter your email!'),
    password: Yup.string().required('Please enter your password!')
})

const Registration = ({setAuth}) => {
    const [showPassword, setShowPassword] = useState(false)

    const formik = useFormik({
        initialValues: {name:'', email:'', password:''},
        validationSchema: schema,
        onSubmit: async ({name, email, password}) => {
            setAuth('verifyEmail')
        }
    })

    const {errors, touched, values, handleChange, handleSubmit} =formik;
  return (
    <div className='w-full flex flex-col gap-5'>
    <h1 className={`${styles.title}`}>
        Register with pbtechub
    </h1>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
    <div className="">
            <label htmlFor="name" className={`${styles.lable}`}>
                Enter your name
            </label>
            <input 
                type='text'
                name=''
                value={values.name}
                onChange={handleChange}
                placeholder='John Doe'
                id='name'
                className={`${errors.name && touched.name && 'border-red-500'} ${styles.input}`}
            />
            {errors.name && touched.name && (<span className='text-red-500 pt-2 block'>{errors.name}</span>)}
        </div>
        <div className="">
            <label htmlFor="email" className={`${styles.lable}`}>
                Enter your email
            </label>
            <input 
                type='email'
                name=''
                value={values.email}
                onChange={handleChange}
                placeholder='example@email.com'
                id='email'
                className={`${errors.email && touched.email && 'border-red-500'} ${styles.input}`}
            />
            {errors.email && touched.email && (<span className='text-red-500 pt-2 block'>{errors.email}</span>)}
        </div>
        <div className="">
            <label htmlFor="password" className={`${styles.lable}`}>
                Enter your password
            </label>
            <div className="w-full relative">
                <input 
                    type={!showPassword ? 'password' : 'text'}
                    name=''
                    value={values.password}
                    onChange={handleChange}
                    placeholder='password!@#$7%'
                    id='password'
                    className={`${errors.password && touched.password && 'border-red-500'} ${styles.input}`}
                />
                {!showPassword ? (
                    <AiOutlineEyeInvisible 
                        className='absolute bottom-3 right-2 z-1 cursor-pointer'
                        size={20}
                        onClick={()=> setShowPassword(true)}
                    />
                ) : (
                    <AiOutlineEye 
                        className='absolute bottom-3 right-2 z-1 cursor-pointer'
                        size={20}
                        onClick={()=> setShowPassword(false)}/>
                )}
            </div>
            {errors.password && touched.password && (<span className='text-red-500 pt-2 block'>{errors.password}</span>)}

        </div>
        <button 
            type='submit'
            className='block bg-[#2190ff] font-Poppins font-semibold py-2 rounded'
        >
            Register
        </button>
       
        <h5 className='text-center font-Poppins dark:text-white text-black text-[12px]'>Or join with</h5>
        <div className="flex items-center justify-center gap-5">
            <FcGoogle size={30} className/>
            <BsGithub size={30} className='cursor-pointer text-black dark:text-white'/>
        </div>
        <h5 className='text-center font-Poppins dark:text-white text-black text-[12px]'>Already have an account?
        <span className='text-[#2190ff] cursor-pointer ml-2'
        onClick={()=> setAuth('login')}>Sign in</span>
        </h5>
    </form>
</div>
  )
}

export default Registration