import React, { useState } from 'react'
import item from '../../assets/korean.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeartToggle from '../Favourites/HeartToggle';
import { faAngleLeft, faAngleRight, faArrowUp, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Card = ({ title = "", subTitle = "Super Pants", price = "$200", image = "" }) => {

    const location = useLocation();
    const [count, setCount] = useState(1);
    return (
        <>
            <div className='relative border p-2 rounded-2xl'>
                {location.pathname === '/cart' && (
                    <div className="absolute bottom-3 left-20 flex items-center gap-2">
                        <h1 className='absolute -left-16 float-left'>Qty: 10</h1>
                        <button
                            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                            onClick={() => setCount(prev => (prev > 1 ? prev - 1 : 1))}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>

                        <input
                            type="number"
                            value={count}
                            min="1"
                            onChange={(e) => setCount(Number)}
                            className="w-10 text-center border border-gray-300 rounded"
                        />

                        <button
                            className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                            onClick={() => setCount(prev => prev + 1)}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                )}
                <img src={image} className=' rounded-2xl mb-3 h-64 w-full' alt="shoes" />
                <h2 className='flex text-black font-semibold w-48'>{title}</h2>
                <h4 className='text-zinc-700'>{subTitle}</h4>
                <h1 className='font-bold text-red-500 pb-2 mb-8'>{price} <button className='bg-zinc-100 border text-center float-right  hover:bg-red-500 hover:text-white text-black w-12 h-12 rotate-45 rounded-full'><FontAwesomeIcon icon={faArrowUp} /></button>
                </h1>

                <div className="absolute top-6 right-6">

                    {location.pathname !== "/cart" && <HeartToggle size={25} filledColor="red" emptyColor="gray" />}
                </div>

            </div>
        </>
    )
}

export default Card
