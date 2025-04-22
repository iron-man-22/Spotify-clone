import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footerSectionContainer'>
      <div className="footerLeftSection">
          <h4>Preview of Spotify</h4>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
      </div>
      <div className="footerRightSection">
        <button>Sign up free</button>
      </div>
    </div>
  )
}

export default Footer