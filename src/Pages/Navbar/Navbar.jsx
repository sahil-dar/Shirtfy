import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBox, faCartPlus, faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/Logo.png";
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import DropDown from './DropDownProfile';
import DropDownBars from './DropDownBars';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-screen box-border border bg-white ">
        <div className="w-full h-20 flex items-center justify-between px-6">
          <div className="flex items-center gap-6 font-bold text-lg text-black">
            <FontAwesomeIcon
              className="cursor-pointer hover:text-red-500 ml-2"
              icon={faBars}
              onClick={() => setIsOpen((prev) => !prev)}
            />
            <Link to={'/Men'}>
            <h2 className="hover:text-red-500">MEN</h2>
            </Link>
            <h2 className="hover:text-red-500">WOMAN</h2> 
            <h2 className="hover:text-red-500">SNEAKERS</h2>
          </div>

          <div className="flex items-center gap-6">
            <img className="h-14" src={Logo} alt="Logo" />
            <SearchBar onSearch={(q) => alert("Searching for: " + q)} />


          </div>

          <div className='flex justify-between mr-7'>
          <div className="flex items-center gap-6 text-2xl ">
            <FontAwesomeIcon
              icon={faUser}
              className="cursor-pointer hover:text-red-500"
              onClick={() => setOpen((prev) => !prev)}
            />
            <Link to={"/Favourites"}>
              <FontAwesomeIcon
                icon={faHeart}
                title="Favourites"
                className="cursor-pointer hover:text-red-500"
              />
            </Link>
            <Link to={"/cart"}>
              <FontAwesomeIcon
                icon={faCartPlus}
                title="Cart"
                className="cursor-pointer hover:text-red-500"
              />
            </Link>
            <FontAwesomeIcon
              icon={faBox}
              className="cursor-pointer hover:text-red-500"
            />
            </div>
          </div>
        </div>
      </div>

      {open && <DropDown />}
      {isOpen && <DropDownBars />}
    </>
  );
};

export default Navbar;
