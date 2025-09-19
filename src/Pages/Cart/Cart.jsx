import React from 'react';
import jacket from '../../assets/Adidas-jacket.avif';
import shoe from '../../assets/Adidas-shoes.avif';
import { useNavigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = () => {

const Navigate = useNavigate();

  return (
    <>
<div className=' w-screen min-h-screen p-6 box-border pt-24'>
    <button className='absolute p-3' onClick={() => Navigate(-1)}>
    <FontAwesomeIcon
    icon={faArrowLeft}
    className='hover:text-red-500'
    />
    </button>
       <h1 className='text-center font-bold text-2xl hover:text-red-500 '>My Cart</h1>
        <div className='grid grid-cols-4 gap-16 p-3 mt-2'>
         <div className='border p-2'>
        <img src={jacket} />
        <h1 className='font-semibold '>Adidas Original Jacket</h1>
        <p>$60</p>
        <button className='w-full bg-red-500 border rounded-md p-2 text-white font-semibold'>Buy Now</button>
            </div>

         <div className='border p-2'>
        <img src={shoe} alt="" />
        <h1 className='font-semibold '>Adidas Original shoes</h1>
        <p>$60</p>
        <button className='w-full bg-red-500 border rounded-md p-2 text-white font-semibold'>Buy Now</button>

        </div>   
        <div className='border p-2'>
        <img src={jacket} />
        <h1 className='font-semibold '>Adidas Original Jacket</h1>
        <p>$60</p>
        <button className='w-full bg-red-500 border rounded-md p-2 text-white font-semibold'>Buy Now</button>

            </div>

         <div className='border p-2'>
        <img src={shoe} alt="" />
        <h1 className='font-semibold '>Adidas Original shoes</h1>
        <p>$60</p>
        <button className='w-full bg-red-500 border rounded-md p-2 text-white font-semibold'>Buy Now</button>

        </div>  
        <div className='border p-2'>
        <img src={jacket} />
        <h1 className='font-semibold '>Adidas Original Jacket</h1>
        <p>$60</p>
        <button className='w-full bg-red-500 border rounded-md p-2 text-white font-semibold'>Buy Now</button>

            </div>

         <div className='border p-2'>
        <img src={shoe} alt="" />
        <h1 className='font-semibold '>Adidas Original shoes</h1>
        <p>$60</p>
        <button className='w-full bg-red-500 border rounded-md p-2 text-white font-semibold'>Buy Now</button>

        </div>  
        <div className='border p-2'>
        <img src={jacket} />
        <h1 className='font-semibold '>Adidas Original Jacket</h1>
        <p>$60</p>
        <button className='w-full bg-red-500 border rounded-md p-2 text-white font-semibold'>Buy Now</button>

            </div>

         <div className='border p-2'>
        <img src={shoe} alt="" />
        <h1 className='font-semibold'>Adidas Original shoes</h1>
        <p>$60</p>
        <button className='w-full bg-red-500 border rounded-md p-2 text-white font-semibold'>Buy Now</button>

        </div>  

        
        
 </div>

      </div>
          <footer className='flex w-full border bg-zinc-50 p-6 mt-4 content-center justify-around'>
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
    </>
  )
}

export default Cart
