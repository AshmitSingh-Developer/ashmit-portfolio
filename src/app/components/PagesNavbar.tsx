import React from 'react'
import Logo from '../styles/Logo'

const PagesNavbar = () => {
  return (
    <div>
        <div className=' fixed top-0 z-40 w-screen  shadow-2xs backdrop-blur-sm sm:w-full h-12 sm:h-14 pl-3 pr-0 sm:px-6 md:px-8 lg:px-12 overflow-hidden flex flex-row justify-between items-center '>
         <Logo/>
        </div>
    </div>
  )
}

export default PagesNavbar