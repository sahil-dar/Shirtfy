// src/components/HeartToggle.js
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HeartToggle = ({ size = 24, filledColor = "red", emptyColor = "gray", className = "" }) => {
  const [filled, setFilled] = useState(false);

  const toggle = (e) => {
    e?.stopPropagation?.(); // prevents clicks from bubbling (useful in cards)
    setFilled(!filled);
  };

  return (
    <span
      onClick={toggle}
      className={className}
      style={{
        cursor: "pointer",
        fontSize: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {filled ? <FaHeart color={filledColor} /> : <FaRegHeart color={emptyColor} />}
    </span>
  );
};

export default HeartToggle;
