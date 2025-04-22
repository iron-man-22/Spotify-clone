import React from 'react'
import "./PopularArtist.css"
import ArtistCard from '../artistCard/ArtistCard'
const PopularArtist = ({setCurrentPage}) => {
  return (
    <div className='popularArtistSectionMainContainer'>
      <span>Popular Artists</span>
      <ArtistCard setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default PopularArtist