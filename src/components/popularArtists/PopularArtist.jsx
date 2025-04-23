import React from 'react'
import "./PopularArtist.css"
import ArtistCard from '../artistCard/ArtistCard'
const PopularArtist = ({setCurrentPage,setCurrentArtst}) => {
  return (
    <div className='popularArtistSectionMainContainer'>
      <span>Popular Artists</span>
      <ArtistCard  setCurrentPage={setCurrentPage} setCurrentArtst={setCurrentArtst} />
    </div>
  )
}

export default PopularArtist