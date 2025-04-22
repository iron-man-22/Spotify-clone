import React, { useState } from 'react'
import "./MainSection.css"
import TrendingSection from '../trendingSection/TrendingSection'
import PopularArtist from '../popularArtists/PopularArtist'
import SpecificMusic from '../../pages/specificMusic/SpecificMusic'
const MainSection = () => {
  const [currentPage,setCurrentPage]=useState("home")
  const [currentEle,setCurrentEle]=useState(null)
  return (
    <main className='mainSectionContainer'>
      {
        currentPage==="home" ? 
        <>
          <TrendingSection setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
          <PopularArtist setCurrentPage={setCurrentPage} />
          <TrendingSection setCurrentPage={setCurrentPage} setCurrentEle={setCurrentEle} />
        </>
        :currentPage==="musicSpecificPage"? 
        <SpecificMusic currentEle={currentEle} />
        : currentPage==="artistSpecificPage"? <>Artist</>
        :null
      }
      
    </main>
     
  )
}

export default MainSection