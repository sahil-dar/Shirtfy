import React, { useState } from 'react';
import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchBar = ({onSearch, placeholder="What are you looking for?", height= "7vh", width="25vw"}) => {
const [query, setQuery] = useState("");

  const handleDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);   // will call parent function
    }
  };



  return (
    <>

      <div className="w-72 relative float-left content-center nav-right justify-between">
            <input
              type="text"
              placeholder = {placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleDown}
              style={{height:height, width:width}}
            className=" absolute border border-black rounded-full p-2 pr-9 ml-16 -top-5 font-serif text-black placeholder-black focus:outline-red-600 "
            />
            <FontAwesomeIcon
              icon={faSearch}
               onClick={() => onSearch(query)}
              className="absolute left-80 top-1/2 transform -translate-y-1/2 text-black cursor-pointer hover:text-red-500"
            />
            <FontAwesomeIcon

              icon={faMicrophone}
              className="absolute left-72  top-1/2 transform -translate-y-1/2 text-black cursor-pointer hover:text-red-500"
            />
            </div>
    </>
  )
}

export default SearchBar
