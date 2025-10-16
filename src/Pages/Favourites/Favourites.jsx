import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../HomePage/Card"
import { items } from "../HomePage/HomePage"
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Favourites = () => {
  const navigate = useNavigate()
  const [favourites, setFavourites] = useState([])

  const loadFavourites = () => {
    const favIds = JSON.parse(localStorage.getItem("favourites")) || []
    const favProducts = items.filter(p => favIds.includes(p.id))
    setFavourites(favProducts)
  }

  useEffect(() => {
    loadFavourites()
  }, [])

  return (
    <div className="w-screen min-h-screen p-6 box-border pt-24">
      <button className="hover:text-red-500 absolute left-20" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1 className="text-center font-bold text-2xl hover:text-red-500 pb-8">Favourites</h1>

      {favourites.length > 0 ? (
        <div className="grid grid-cols-4 gap-6 px-6">
          {favourites.map(fav => (
            <Card key={fav.id} id={fav.id} title={fav.title} subTitle={fav.subTitle} price={fav.price} image={fav.image} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-20 text-lg">You haven’t added any favourites yet ❤️</p>
      )}
    </div>
  )
}

export default Favourites
