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
<div className=' w-full min-h-screen p-6 '>
    <button className='absolute p-3' onClick={() => Navigate(-1)}>
    <FontAwesomeIcon
    icon={faArrowLeft}
    />
    </button>
       <h1 className='text-center font-bold text-2xl '>My Cart</h1>
        <div className='grid grid-cols-4 gap-3 p-3 mt-2'>
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
    </>
  )
}

export default Cart
