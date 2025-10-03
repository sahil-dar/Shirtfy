import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBox, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import DropDownBars from './DropDownBars';
import SearchBar from '../SearchBar/SearchBar';
import { faArrowRightFromBracket, faInfo, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-screen border bg-white">
        <div className="w-full h-20 flex items-center justify-between px-6">
          {/* Left Side */}
          <div className="flex items-center gap-6 font-bold text-lg text-black">
            
            {/* Bars with hover dropdown */}
            <div className="relative group">
              <FontAwesomeIcon
                className="cursor-pointer hover:text-red-500 ml-2"
                icon={faBars}
              />
              {/* Dropdown appears on hover */}
              <div className="absolute hidden group-hover:flex mt-3 bg-white border rounded-md shadow-lg p-3 w-40 z-50">
                <DropDownBars />
              </div>
            </div>

            <Link to={'/Men'}>
              <h2 className="hover:text-red-500">MEN</h2>
            </Link>
            <Link to={'/Woman'}>
              <h2 className="hover:text-red-500">WOMAN</h2>
            </Link>
            <Link to={'/Sneakers'}>
              <h2 className="hover:text-red-500">SNEAKERS</h2>
            </Link>
          </div>

          {/* Middle (Logo + Search) */}
          <div className="flex items-center gap-6">
            <img className="h-14" src={Logo} alt="Logo" />
            <SearchBar onSearch={(q) => alert("Searching for: " + q)} />
          </div>

          {/* Right Side */}
          <div className="flex justify-between mr-7">
            <div className="flex items-center gap-6 text-2xl">

              {/* Profile with hover dropdown */}
              <div className="relative group">
                <FontAwesomeIcon
                  icon={faUser}
                  className="cursor-pointer hover:text-red-500"
                />
                <div className="absolute hidden group-hover:flex flex-col mt-3 bg-white border rounded-md shadow-lg p-3 w-40 z-50">
                  <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-2"> 
                      <FontAwesomeIcon className="hover:text-red-500" icon={faUser} />
                      <Link className="hover:text-red-500" to={'/login'}>Login</Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <FontAwesomeIcon className="hover:text-red-500" icon={faUser} />
                      <Link className="hover:text-red-500" to={'/SignUp'}>SignUp</Link>
                    </li>
                    <li className="hover:text-red-500 cursor-pointer flex items-center gap-2"> 
                      <FontAwesomeIcon icon={faQuestion}/> Help
                    </li>
                    <li className="hover:text-red-500 cursor-pointer flex items-center gap-2"> 
                      <FontAwesomeIcon icon={faArrowRightFromBracket}/> Log Out
                    </li>
                    <li className="hover:text-red-500 cursor-pointer flex items-center gap-2"> 
                      <FontAwesomeIcon icon={faInfo}/> About Us
                    </li>
                  </ul>
                </div>
              </div>

              {/* Other Icons */}
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
    </>
  );
};

export default Navbar;
