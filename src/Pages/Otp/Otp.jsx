import React, { useState } from 'react'
import souled from '../../assets/souled-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate } from 'react-router-dom'

const Otp = () => {

    const Navigate = useNavigate()
    const location = useLocation()


    const from = location.state?.from; 
    console.log(location);


    const greeting =
     from === "login" ? "Welcome Back":
     from === "signUp" ? "Welcome":"Hello"; 


  return (
    <>
    <div className='h-screen w-screen bg-white border border-gray-300 rounded-md place-items-center p-6'>

          <button className='hover:text-red-500' title='Click to go back' onClick={() => Navigate(-1)}>

            <FontAwesomeIcon
              icon={faArrowLeft} />
          </button>
          <img className='h-10 ' src={souled} alt="" />
          <h2 className='text-black p-6 font-bold text-2xl'>{greeting}</h2>
          <p className='-mt-4 mb-2'>Sign in to your account to continue shopping</p>
          <p className='text-center text-2xl ml-2 font-semibold'>Verify OTP here</p>

   <div className="flex gap-4 pt-6 pb-4 text-center">
  {[...Array(4)].map((_, i) => (
    <input
      key={i}
      type="text"
      maxLength={1}
      className="border rounded-md text-center border-black w-10 p-3"
      onChange={(e) => {
        const next = e.target.nextElementSibling;
        if (next && e.target.value) next.focus();
      }}
      onKeyDown={(e) => {
        if (e.key === "Backspace" && e.target.previousElementSibling && !e.target.value) {
          e.target.previousElementSibling.focus();
        }
      }}
    />
  ))}
</div>
    <button
            type="submit"
            className="bg-red-500 relative left-[29rem] pb-3 w-[18rem] p-2 mt-6 rounded-md text-white"
          >
            Verify OTP
          </button>
<div className='mt-3'>

    <p>Didn't get? <span className='text-red-500'>Resend</span></p>
</div>


      <footer className='flex cursor-default w-full border bg-zinc-50 p-6 mt-4 content-center justify-around'>
                <div className=''>
                    <h1 className='text-red-500 font-bold text-lg'>NEED HELP</h1>
                    <p className='hover:text-red-500'>Contact Us</p>
                    <p className='hover:text-red-500'>Track Order</p>
                    <p className='hover:text-red-500'>Returns And Refunds</p>
                    <p className='hover:text-red-500'>FAQs</p>
                    <p className='hover:text-red-500'>My Account</p>
                </div>

                <div className='content-center'>
                    <h1 className='text-red-500 font-bold text-lg'>COMPANY</h1>
                    <p className='hover:text-red-500'>About Us</p>
                    <p className='hover:text-red-500'>Investor Relation</p>
                    <p className='hover:text-red-500'>Careers</p>
                    <p className='hover:text-red-500'>Gift Vouchers</p>
                    <p className='hover:text-red-500'>Community Initiatives</p>
                </div>

                <div>
                    <h1 className='text-red-500 font-bold text-lg'>MORE INFO</h1>
                    <p className='hover:text-red-500'>T&C</p>
                    <p className='hover:text-red-500'>Privacy Policy</p>
                    <p className='hover:text-red-500'>Sitemap</p>
                    <p className='hover:text-red-500'>Get Notified</p>
                    <p className='hover:text-red-500'>Blogs</p>
                </div>

                <div className='float-right'>
                    <h1 className='text-red-500 font-bold text-lg'>STORE NEAR ME</h1>
                    <p className='hover:text-red-500'>Mumbai</p>
                    <p className='hover:text-red-500'>Pune</p>
                    <p className='hover:text-red-500'>Banglore</p>
                    <p className='hover:text-red-500'>Hubbali</p>
                    <p className='hover:text-red-500'>View More</p>
                </div>

            </footer>
          
    </div>
    </>
  )
}

export default Otp
