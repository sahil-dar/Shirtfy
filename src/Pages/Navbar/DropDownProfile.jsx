import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { faInfo, faQuestion } from '@fortawesome/free-solid-svg-icons';
import '../../../src/index.css'

const DropDownProfile = () => {

  return (
    <>
    <div className='flex flex-col DropDownProfile'>
  <ul className='flex flex-col gap-3'> {/* gap between rows */}
    <li className='flex items-center gap-2'> {/* gap between icon and text */}
      <FontAwesomeIcon className='hover:text-red-500' icon={faUser} />
      <Link className='hover:text-red-500' to={'/Login'}>Login</Link>
    </li>

    <li className='flex items-center gap-2'>
      <FontAwesomeIcon className='hover:text-red-500' icon={faUser} />
      <Link className='hover:text-red-500' to={'/SignUp'}>SignUp</Link>
    </li>

    <li className='hover:text-red-500 cursor-pointer'> <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon> Help</li>
    <li className='hover:text-red-500 cursor-pointer'> <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>About Us</li>
  </ul>
</div>

    </>
  )
}

export default DropDownProfile;
