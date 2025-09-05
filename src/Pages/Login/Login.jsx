import React, { useState } from 'react';
import souled from '../../assets/souled-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faLock, faArrowLeft, faBackward } from '@fortawesome/free-solid-svg-icons';
import { Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Login = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const toggleVissiblePassword = () => {
    setShowPassword(!showPassword)
  }




  return (
    <>
      <div className='w-full h-screen bg-white content-center place-items-center'>
        <div className='h-3/4 w-2/5 bg-white border border-gray-300 rounded-md place-items-center p-6'>

          <button className='hover:text-red-500' onClick={() => Navigate(-1)}>

            <FontAwesomeIcon
              icon={faArrowLeft} />
          </button>
          <img className='h-10 ' src={souled} alt="" />
          <h2 className='text-black p-6 font-bold text-2xl'>Welcome Back</h2>
          <p className='-mt-4 mb-2'>Sign in to your account to continue shopping</p>
          <p className='float-left ml-2 font-semibold'>Email Adress</p>
          <div className=' float-left w-full'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className=' mb-2 mr-3 ml-2 border p-2 absolute'
            />
            <input type="email" placeholder='Enter your email' className='w-10/12 border p-1 ml-12 focus:outline-red-500 ' />

          </div>
          <br />

          <p className='float-left mt-2 ml-2 font-semibold'>Password</p>
          <div className=' float-left w-full '>
            <FontAwesomeIcon
              icon={faLock}
              className=' mb-2 mr-3 ml-2 border p-2 absolute'
            />
            <input type={showPassword ? 'text' : 'password'} placeholder='Enter your password' className='w-10/12 border p-1 ml-12 focus:outline-red-500' />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={toggleVissiblePassword}
              className='absolute -ml-7 mt-2 cursor-pointer hover:text-red-500'
            />
            <br />
          </div>
          <h2 className='absolute mt-24 right-96 mr-14 text-red-500 hover:underline cursor-pointer'>Forget password?</h2>

          <div >
            <button className='w-96 bg-red-500 mt-10 p-1 text-white font-bold text-lg rounded-md'> Sign in </button>
          </div>
          <div >
            <button className='w-96 mt-2 p-1 text-black font-bold text-lg border  border-red-500 rounded-md'> Login with OTP </button>

            <br />
            <Link to={'/signUp'}>
            <p className=' text-center text-gray-600'>Don't have an account? <span className='text-red-500 hover:underline cursor-pointer'>Sign up</span></p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
