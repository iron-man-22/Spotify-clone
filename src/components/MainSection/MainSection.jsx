import React, { useState } from 'react'
import "./MainSection.css"
import TrendingSection from '../trendingSection/TrendingSection'
import PopularArtist from '../popularArtists/PopularArtist'
import SpecificMusic from '../../pages/specificMusic/SpecificMusic'
import SpecifiArtist from '../../pages/specificArtist/SpecifiArtist'
const MainSection = () => {
  const [currentPage,setCurrentPage]=useState("home")
  const [currentEle,setCurrentEle]=useState(null)
  const [currentArtst,setCurrentArtst]=useState(null)
  return (
    <main className='mainSectionContainer'>
      {
        currentPage==="home" ? 
        <>
          <TrendingSection setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
          <PopularArtist   setCurrentPage={setCurrentPage} setCurrentArtst={setCurrentArtst} />
          <TrendingSection setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
        </>
        :currentPage==="musicSpecificPage"? 
        <SpecificMusic setCurrentEle={setCurrentEle} setCurrentPage={setCurrentPage} currentEle={currentEle} key={currentEle?.heading} />
        : currentPage==="artistSpecificPage"?
        <SpecifiArtist currentArtst={currentArtst} />
        :null
      }
      
    </main>
     
  )
}

export default MainSection