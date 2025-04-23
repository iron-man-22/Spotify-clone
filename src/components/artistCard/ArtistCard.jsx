import React from 'react'
import "./ArtistCard.css"
import { PopularArtists } from '../../config/config'
const ArtistCard = ({setCurrentPage,setCurrentArtst}) => {
  
  return (
    <>
      <div className='popularArtistCard'>
      {
        PopularArtists.map((ele)=> {
          return(
              <>
                <div onClick={() =>{
                setCurrentArtst(ele)
                setCurrentPage("artistSpecificPage") 
                  }} className="artistCardContainer">
                    <img src={ele.imgArt} alt="" />
                    <div className="artistNameContainer">
                      <h3>{ele.name}</h3>
                      <p>{ele.subName}</p>
                    </div>
                    <span id='iconSvg'>
                      <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-9812-icon e-9812-baseline" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
                    </span>
                </div>
              </>
          )
        })
      }
      </div>
    </>
  )
}

export default ArtistCard