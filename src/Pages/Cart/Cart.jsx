import React from 'react';
import jacket from '../../assets/Adidas-jacket.avif';
import shoe from '../../assets/Adidas-shoes.avif';

const Cart = () => {
  return (
    <>
<div className=' w-full h-screen'>
       <h1 className='text-center font-bold text-2xl '>My Cart</h1>
        <div className='grid grid-cols-4 gap-3 p-3 mt-2'>
         <div className='border p-2'>
        <img src={jacket} />
        <h1 className='font-semibold '>Adidas Original Jacket</h1>
        <p>$60</p>
            </div>

         <div className='border p-2'>
        <img src={shoe} alt="" />
        <h1 className='font-semibold '>Adidas Original shoes</h1>
        <p>$60</p>
        </div>   
        <div className='border p-2'>
        <img src={jacket} />
        <h1 className='font-semibold '>Adidas Original Jacket</h1>
        <p>$60</p>
            </div>

         <div className='border p-2'>
        <img src={shoe} alt="" />
        <h1 className='font-semibold '>Adidas Original shoes</h1>
        <p>$60</p>
        </div>  
        <div className='border p-2'>
        <img src={jacket} />
        <h1 className='font-semibold '>Adidas Original Jacket</h1>
        <p>$60</p>
            </div>

         <div className='border p-2'>
        <img src={shoe} alt="" />
        <h1 className='font-semibold '>Adidas Original shoes</h1>
        <p>$60</p>
        </div>  
        <div className='border p-2'>
        <img src={jacket} />
        <h1 className='font-semibold '>Adidas Original Jacket</h1>
        <p>$60</p>
            </div>

         <div className='border p-2'>
        <img src={shoe} alt="" />
        <h1 className='font-semibold'>Adidas Original shoes</h1>
        <p>$60</p>
        </div>  
        
        
 </div>

      </div>
    </>
  )
}

export default Cart
