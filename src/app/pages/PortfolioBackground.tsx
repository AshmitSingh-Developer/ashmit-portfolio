import React from 'react'

const PortfolioBackground = () => {
  return (
   <>
     <div className="absolute   inset-0 -z-10 bg-black overflow-hidden ">
      {/* Blur blobs */}
      <div className="absolute w-72 h-72 bg-green opacity-18 md:opacity-30 blur-3xl md:-top-[5%] md:left-[50%] -top-[70px] translate-x-1/5  rounded-full" />
      <div className="absolute w-55 h-90 bg-green opacity-0 md:opacity-40 blur-3xl md:-top-[6%] md:left-[30%]  rotate-z-45 rounded-md" />
      <div className="absolute w-96 h-96 bg-green opacity-20 blur-2xl bottom-0 right-0  rounded-full" />
      <div className="absolute w-60 h-60 bg-pink-500 opacity-20 blur-2xl top-1/2 left-1/2  rounded-full" />
    </div>
   </>
  )
}

export default PortfolioBackground