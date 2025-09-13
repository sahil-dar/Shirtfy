import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye } from '@fortawesome/free-regular-svg-icons';
import souled from '../../assets/souled-logo.png';
import { faLock, faArrowLeft, faBackward } from '@fortawesome/free-solid-svg-icons';
import { Router, Routes, Route, useNavigate, Link } from 'react-router-dom';

const SignUp = () => {

    const Navigate = useNavigate();
    return (
        <>
            <div className='w-full h-screen bg-white content-center p-3 place-items-center'>
                <div className='h-3/2 w-2/5 bg-white place-items-center border border-gray-300 rounded-md p-8'>
                    <img className='h-10' src={souled} alt="" />
                <h1 className='font-bold text-lg'>SignUp with The Souled Store</h1>
                    <button className=' absolute left-96 pl-6 top-10 float-left hover:text-red-500' title='Click to go back' onClick={() => Navigate(-1)}>
                        <FontAwesomeIcon
                            icon={faArrowLeft} />
                    </button>
                    <p className='float-left mt-4'>Username</p>
                    <input type="text" placeholder='Username*' className='w-full border p-2 rounded-md focus:outline-red-500' />
                    <br />
                    <p className='float-left mt-4'>Email</p>
                    <input type="email" placeholder='Email ID*' className='w-full border p-2 rounded-md focus:outline-red-500' />
                    <br />
                    <p className='float-left mt-4'>Password</p>
                    <input type="password" placeholder='Create password*' className='w-full border p-2 rounded-md focus:outline-red-500' />
                    <br />
                    <p className='float-left mt-4'>Confirm Password</p>
                    <input type="password" placeholder='Confirm password*' className='w-full border p-2 rounded-md focus:outline-red-500' />

                    <p className='float-left mt-4'>Mobile Number</p>

                    <input type="tel" placeholder='Mobile Number (For order status update) *' required className='w-full border p-2 rounded-md focus:outline-red-500' />


                    <p className='float-left w-full mt-2'>Gender</p>
                    <br />
                    <input type="radio" name="gender" value="male" className='mr-2 cursor-pointer rounded-md' /> Male
                    <input type="radio" name="gender" value="female" className='ml-2 cursor-pointer rounded-md' /> Female

                    <br />
                    <button className='bg-red-500 border p-2 w-full mt-2 rounded-md text-white'>Sign in</button>

                    <Link to={'/login'}>
                    <p className='text-gray-600'>Already a Customer? <span className='text-red-500 hover:underline cursor-pointer'>Login</span></p>
                    </Link>



                </div>
            </div>

        </>
    )
}

export default SignUp
