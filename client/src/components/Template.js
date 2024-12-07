import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'
import img from '../assets/Tooploox website jobs illustration.gif'

const Template = ({ title, desc1, formtype, setIsLoggedIn }) => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
  <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-[1160px] gap-y-12 md:gap-x-12 bg-white p-4'>
    
    {/* Left Section (Form) */}
    <div className='w-full max-w-[450px]'>
      <h1 className='text-black font-semibold text-[1.875rem] leading-[2.375rem]'>
        {title}
      </h1>
      <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
        <span className='text-black'>{desc1}</span>
      </p>

      {/* Conditional Form rendering */}
      {formtype === 'signup' ? (
        <SignupForm setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
      
      {/* Optional Google SignUp Button */}
      {/* Uncomment if needed
      <div className='flex w-full items-center my-4 gap-x-2'>
        <div className='w-full h-[1px] bg-richblack-700'></div>
        <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
        <div className='w-full h-[1px] bg-richblack-700'></div>
      </div>
      
      <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-black border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
        <FcGoogle />
        <p>Sign Up with Google</p>
      </button>
      */}

    </div>

    {/* Right Section (Image) */}
    <div className='relative w-full max-w-[450px] hidden md:block'> {/* Hide on small screens */}
      <img
        src={img}
        alt='Students'
        width={1000}
        height={600}
        loading='lazy'
        className='w-full rounded-full'
      />
    </div>

  </div>
</div>
  )
}

export default Template
