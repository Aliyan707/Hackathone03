import React from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { IoIosHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Lowerheader = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="logo.png"  />
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">New & Featured</a>
      <div>
      
      <a className="mr-5 hover:text-gray-900">Men</a>
    
      </div>
      <a className="mr-5 hover:text-gray-900">Women</a>
      <a className="mr-5 hover:text-gray-900">Kids</a>
      <a className="mr-5 hover:text-gray-900">Sale</a>
      <a className="mr-5 hover:text-gray-900">SNKRS</a>
    </nav>
    <div className="<CiSearch /> flex items-center gap-4" > 
    
    <input
    
    type="text"
    placeholder="Search"
    className="w-[200px] text-center border border-gray-500 rounded-full p-2"
    
  />
   <CiSearch className=' text-black size-8 mx-4' />  

   <IoIosHeartEmpty  className=' text-black size-8 mx'/>

      
   </div>
   
   
   </div>
</header>
    </div>
  )
}

export default Lowerheader
