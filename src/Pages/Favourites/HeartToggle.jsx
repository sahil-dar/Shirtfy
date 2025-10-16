import React, { useEffect, useState } from "react"
import { FaHeart, FaRegHeart } from "react-icons/fa"

const HeartToggle = ({ id, size = 24, filledColor = "red", emptyColor = "gray" }) => {
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || []
    setFilled(favs.includes(id))
  }, [id])

  const toggle = (e) => {
    e.stopPropagation()
    const favs = JSON.parse(localStorage.getItem("favourites")) || []
    let updatedFavs
    if (favs.includes(id)) {
      updatedFavs = favs.filter(favId => favId !== id)
      setFilled(false)
    } else {
      updatedFavs = [...favs, id]
      setFilled(true)
    }
    localStorage.setItem("favourites", JSON.stringify(updatedFavs))
  }

  return (
    <span
      onClick={toggle}
      style={{
        cursor: "pointer",
        fontSize: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {filled ? <FaHeart color={filledColor} /> : <FaRegHeart color={emptyColor} />}
    </span>
  )
}

export default HeartToggle
