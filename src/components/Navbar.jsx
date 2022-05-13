import React from 'react'
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <Link to='/'>
        <div className='w-full bg-[#26272b] text-white py-8'>
            <div className='max-w-[1240px] mx-auto flex items-center justify-center'>
                <FaCoins className=' text-indigo-600 mr-4' size={30}  />
                <h1 className='text-3xl font-bold'>Coin <span className=' text-indigo-600'>Search</span></h1>
            </div>
        </div>
      </Link>
  )
}

export default Navbar