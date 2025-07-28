import React from 'react'
import PortfolioContent from "./PortfolioContent"
import PortfolioBackgroundSpace from './PortfolioBG2';
import Background from './PortfolioBackground'

function Portfolio() {

  const cSS1=" relative text-white  overflow-x-hidden "
  return (
  <>
    <div className={cSS1}  >
    <PortfolioBackgroundSpace/>
    <Background/>
    <div><PortfolioContent/></div>
    </div>
  </>
  )
}

export default Portfolio