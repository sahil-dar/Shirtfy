import React from "react"
import { Link, useLocation } from "react-router-dom"
import HeartToggle from "../Favourites/HeartToggle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Card = ({ id, title, subTitle, price, image }) => {
  const location = useLocation()

  return (
    <div className="relative border p-2 rounded-2xl">
      <img src={image} className="rounded-2xl mb-3 h-64 w-full" alt={title} />
      <h2 className="flex text-black font-semibold w-48">{title}</h2>
      <h4 className="text-zinc-700">{subTitle}</h4>
      <h1 className="font-bold text-red-500 pb-2 mb-8">
        {price}
        <Link to={`/product/${id}`} state={{ id, title, subTitle, price, image }}>
          <button className='bg-zinc-100 border text-center float-right hover:bg-red-500 hover:text-white text-black w-12 h-12 rotate-45 rounded-full'>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </Link>
      </h1>

      <div className="absolute top-6 right-6">
          {location.pathname !== '/cart' && <HeartToggle id={id} size={25} filledColor="red" emptyColor="gray" />}
      </div>
    </div>
  )
}

export default Card
