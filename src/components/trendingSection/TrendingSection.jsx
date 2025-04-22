import React from 'react'
import "./TrendingSection.css"
import TrendingCard from '../trendingCard/TrendingCard'
const TrendingSection = ({setCurrentPage,setCurrentEle}) => {
  return (
    <div className='trendingSectionMainContainer'>
      <span>Trending Songs</span> 
      <TrendingCard setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default TrendingSection