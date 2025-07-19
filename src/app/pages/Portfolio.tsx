import React from 'react'

// import PortfolioBackground from './PortfolioBackground';
import PortfolioContent from "./PortfolioContent"
import PortfolioBackgroundSpace from './PortfolioBG2';





function Portfolio() {

  const cSS1=" relative text-white  overflow-x-hidden  overflow-y-auto "
  return (
  <>

  <div className={cSS1}  >



   <PortfolioBackgroundSpace/>
   <div><PortfolioContent/></div>
   
  </div>

 
  </>
  )
}

export default Portfolio