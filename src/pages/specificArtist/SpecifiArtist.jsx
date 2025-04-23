import React from 'react'
import "./SpecifiArtist.css"
import { PopularArtists } from '../../config/config'
import TrendingSection from '../../components/trendingSection/TrendingSection'

const SpecifiArtist = ({currentArtst,setCurrentPage,setCurrentEle}) => {
    
  return (
    <>
      <div className='artstCard'>
      <img src={currentArtst.imgArt} alt="" />
       <div className="artstCardContainer">
          <h1>{currentArtst.name}</h1>
          <h3>{currentArtst.subName}</h3>
       </div>
      </div>
      <TrendingSection setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle}/>
    </>
  )
}

export default SpecifiArtist