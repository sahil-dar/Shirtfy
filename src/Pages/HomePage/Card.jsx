import React from 'react'
import item from '../../assets/korean.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeartToggle from '../Favourites/HeartToggle';
import { faAngleLeft, faAngleRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Card = ({ title = "", subTitle = "Super Pants", price = "$200", image = "" }) => {

    const location = useLocation();
    return (
        <>
            <div className='relative border p-2 rounded-2xl'>
                <img src={image} className=' rounded-2xl mb-3 h-64 w-full' alt="shoes" />
                <h2 className='flex text-black font-semibold w-48'>{title}</h2>
                <h4 className='text-zinc-700'>{subTitle}</h4>
                <h1 className='font-bold text-red-500 pb-2'>{price} <button className='bg-zinc-100 border text-center float-right hover:bg-red-500 hover:text-white text-black w-12 h-12 rotate-45 rounded-full'><FontAwesomeIcon icon={faArrowUp} /></button>
                </h1>
                <div className="absolute top-6 right-6">

                    {location.pathname !== "/cart" && <HeartToggle size={25} filledColor="red" emptyColor="gray" />}
                </div>

            </div>
        </>
    )
}

export default Card
