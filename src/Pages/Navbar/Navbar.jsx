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
      <div className='w-screen box-border flex content-center border overflow-hidden  '>
        <div className='w-full h-20 bg-white flex gap-10 navbar'>
            <div className='w-full h-20 bg-white flex text-black p-2 items-center gap-6 font-bold ml-6 text-lg nav-left'>
                <FontAwesomeIcon className='cursor-pointer hover:text-red-500' icon={faBars} />
                <h2 className='hover:text-red-500'>MEN</h2>
                <h2 className='hover:text-red-500'>WOMAN</h2>
                <h2 className='hover:text-red-500'>SNEAKERS</h2>
            </div>

            <div className='w-full h-20 nav-middle'>
                <img className='h-20' src={Logo}/>
            </div>

            <div className="w-full relative float-left content-center nav-right justify-between">
  <input
    type="text"
    placeholder="What are you looking for?"
  
    className=" w-72 border border-black rounded-full p-2 -ml-56 mr-8 text-black placeholder-black focus:outline-red-600 "
  />

  <FontAwesomeIcon
  
    icon={faMicrophone}
    className="absolute -left-3  top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
  />

  <FontAwesomeIcon
    icon={faSearch}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
  />

    <FontAwesomeIcon
    icon={faBox}
    className='absolute ml-3 top-8 text-2xl cursor-pointer hover:text-red-500'
    />
  
    <Link to="/login">
  <FontAwesomeIcon
    icon={faUser}
    className="absolute ml-16 top-8 text-2xl cursor-pointer hover:text-red-500"
  />
</Link>


    <FontAwesomeIcon
    icon={faHeart} 
    className='absolute ml-32 top-8 text-2xl cursor-pointer hover:text-red-500'
    />

    <Link to={"/cart"}>
    <FontAwesomeIcon
    icon={faCartPlus}
    className='absolute ml-48 top-8 text-2xl cursor-pointer hover:text-red-500'
    />
    </Link>
</div>

   
        </div>
      </div>
    </>
  )
}

export default Navbar
