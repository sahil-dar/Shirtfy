import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBox, faCartPlus, faMicrophone, faSearch,  } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/Logo.png";
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
      <div className='w-full flex content-center  border  wrapper '>
        <div className='w-full h-20 bg-white flex gap-10 navbar'>
            <div className='w-96 h-20 bg-white flex text-black justify-center items-center gap-10 font-bold text-lg nav-left'>
                <FontAwesomeIcon className='cursor-pointer' icon={faBars} />
                <h2>MEN</h2>
                <h2>WOMAN</h2>
                <h2>SNEAKERS</h2>
            </div>

            <div className='w-60 h-20 place-items-center nav-middle'>
                <img className='h-20' src={Logo}/>
            </div>

            <div className="w-80 relative content-center nav-right">
  <input
    type="text"
    placeholder="What are you looking for?"
  
    className="w-full border border-black rounded-full py-2 pl-10 pr-10 text-black placeholder-black focus:outline-none gap-5"
  />

  <FontAwesomeIcon
  
    icon={faMicrophone}
    className="absolute left-64 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
  />

  <FontAwesomeIcon
    icon={faSearch}
    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
  />

    <FontAwesomeIcon
    icon={faBox}
    className='absolute -right-10 top-8 text-2xl cursor-pointer'
    />
  
    <Link to="/login">
  <FontAwesomeIcon
    icon={faUser}
    className="absolute -right-24 top-8 text-2xl cursor-pointer"
  />
</Link>


    <FontAwesomeIcon
    icon={faHeart} 
    className='absolute -right-36 top-8 text-2xl cursor-pointer'
    />

    <Link to={"/cart"}>
    <FontAwesomeIcon
    icon={faCartPlus}
    className='absolute -right-48 top-8 text-2xl cursor-pointer'
    />
    </Link>
</div>

   
        </div>
      </div>
    </>
  )
}

export default Navbar
