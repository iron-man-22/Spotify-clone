import React from 'react'
import "./SpecificMusic.css"
import Navbar from '../../components/Navbar/Navbar'
import { PopularArtists } from '../../config/config'
import TrendingSection from '../../components/trendingSection/TrendingSection'
const SpecificMusic = ({currentEle}) => {
  return (
    <>
      <div className='musicCard'>
       <div className="musicCardContainer">
          <img src={currentEle.imgSrc} alt="" />
          <div className="musicTextContainer">
            <h1>{currentEle.heading}</h1>
            <h3>{currentEle.subHeading}</h3>
          </div>
       </div>
       <div className="audioCard">
        <audio src={currentEle.audFile} controls></audio>
       </div>
      </div>
      <TrendingSection/>
    </>
  )
}

export default SpecificMusic