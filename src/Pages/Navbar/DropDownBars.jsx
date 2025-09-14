import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { faInfo, faQuestion } from '@fortawesome/free-solid-svg-icons';
import '../../../src/index.css'

const DropDownBars = () => {

  return (
    <>
    <div className='flex flex-col text-md cursor-pointer font-semibold DropDownBars'>
  <ul className='flex flex-col gap-3'> 
    <li className='flex items-center gap-2 '>
      <h1 className='hover:text-red-500'>MENSWEAR</h1>
    </li>

    <li className='flex items-center gap-2'>
      <h1 className='hover:text-red-500'>FOOTWEAR</h1>
    </li>

    <li className='hover:text-red-500'>PARTYWEAR</li>
    <li className='hover:text-red-500'> MORE</li>
  </ul>
</div>

    </>
  )
}

export default DropDownBars;
