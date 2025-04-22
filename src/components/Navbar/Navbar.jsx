import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  const SpotifyLogo = () => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="spotify-logo"
      aria-label="Spotify"
      height="30"
      width="35"
      fill="currentColor"
    >
      <title>Spotify</title>
      <path d="M13.427.01C6.805-.253 1.224 4.902.961 11.524C.698 18.147 5.853 23.728 12.476 23.99c6.622.263 12.203-4.892 12.466-11.514S20.049.272 13.427.01Zm5.066 17.579a.717.717 0 0 1-.977.268 14.4 14.4 0 0 0-5.138-1.747 14.4 14.4 0 0 0-5.42.263.717.717 0 0 1-.338-1.392c1.95-.474 3.955-.571 5.958-.29 2.003.282 3.903.928 5.647 1.92a.717.717 0 0 1 .268.978Zm1.577-3.15a.93.93 0 0 1-1.262.376 17.7 17.7 0 0 0-5.972-1.96 17.7 17.7 0 0 0-6.281.238.93.93 0 0 1-1.11-.71.93.93 0 0 1 .71-1.11 19.5 19.5 0 0 1 6.94-.262 19.5 19.5 0 0 1 6.599 2.165c.452.245.62.81.376 1.263Zm1.748-3.551a1.147 1.147 0 0 1-1.546.488 21.4 21.4 0 0 0-6.918-2.208 21.4 21.4 0 0 0-7.259.215 1.146 1.146 0 0 1-.456-2.246 23.7 23.7 0 0 1 8.034-.24 23.7 23.7 0 0 1 7.657 2.445c.561.292.78.984.488 1.546Z"/>
    </svg>
  );
  
  return (
    <nav className='navbarContainer'>
      <div className="navbarLeftSection">
        <div className="leftSectionContainer">
          <SpotifyLogo />
          
        </div>
        <div className="navLeftSectionRightContainer">
        <button
  className="homeBtn Button-sc-1dqy6lx-0 LlNsd e-9812-overflow-wrap-anywhere e-9812-button-tertiary--icon-only Dp3xccI7c2f_JSJ8OHYu obd_bH64Snp1npdw29XM VUXMMFKWudUWE1kIXZoS AonZ39aVKATRTjY28Uww"
  data-testid="home-button"
  aria-label="Home"
  data-encore-id="buttonTertiary"
>
  <span aria-hidden="true" className="e-9812-button__icon-wrapper">
    <svg
      data-encore-id="icon"
      role="img"
      aria-hidden="true"
      className="e-9812-icon e-9812-baseline"
      viewBox="0 0 24 24"
    >
      <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
    </svg>
  </span>
</button>

          <div className="singleBar">
          <button className="searchButton" aria-label="Search">
                <svg viewBox="0 0 24 24" height="20" width="20">
                  <path d="M10.5 3a7.5 7.5 0 015.916 12.184l4.2 4.2a1 1 0 01-1.415 1.415l-4.2-4.2A7.5 7.5 0 1110.5 3zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" />
                </svg>
              </button>
              <input
                type="text"
                className="searchInput"
                placeholder="Search"
                aria-label="Search input"
              />
          </div>
          </div>
      </div>
      <div className="navbarRightSection">
        <div className="navRightSectionLeft">
            <div className='navItems'>Premium</div>
            <div className='navItems'>Support</div>
            <div className='navItems'>Download</div>
        </div>
        <div className="navRightSectionRight">
        <span className='downloadIcon'>
            <svg 
              data-encore-id="icon" 
              role="img" 
              aria-hidden="true" 
              className="downloadIcn" 
              viewBox="0 0 16 16"
            >
            <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
          </svg>
        </span>

          <div className="signUpBtn">
            Sign up
          </div>
          <button className='loginBtn'>Log in</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar