import React from "react";
import { Link } from "react-router-dom";

const DropDownBars = () => {
  return (
    <ul className="flex flex-col gap-3 text-gray-800 font-semibold text-md text-center">
      <li>
        <Link to="/menswear" className="block hover:text-red-500 transition-colors">
          MENSWEAR
        </Link>
      </li>
      <li>
        <Link to="/footwear" className="block hover:text-red-500 transition-colors">
          FOOTWEAR
        </Link>
      </li>
      <li>
        <Link to="/partywear" className="block hover:text-red-500 transition-colors">
          PARTYWEAR
        </Link>
      </li>
      <li>
        <Link to="/more" className="block hover:text-red-500 transition-colors">
          MORE
        </Link>
      </li>
    </ul>
  );
};

export default DropDownBars;
