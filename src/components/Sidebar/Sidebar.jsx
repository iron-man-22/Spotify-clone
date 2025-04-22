import React from 'react'
import "./Sidebar.css"
const Sidebar = () => {
  const Texts=["Legal","Security & Privacy Center","Privacy Policy","Cookies","About Ads","Accessibility"]
  return (
    <div className='sideBarSectionContainer'>
      <div className="sidebarTopSection">
        <h3>Your Library</h3>
        <span>+</span>
      </div>
      <div className="sidebarMaddleSection">
        <div className="createListSection">
          <h3>Create your first playlist</h3>
          <p>It's easy, we'll help you</p>
          <button>Create playlist</button>
        </div>
        <div className="browsePodcastSection">
          <h3>Let's find some podcasts to follow</h3>
          <p>We'll keep you updated on new episodes</p>
          <button>Borwse podcasts</button>
        </div>
        <div className="browsePodcastSection">
          <h3>Let's find some podcasts to follow</h3>
          <p>We'll keep you updated on new episodes</p>
          <button>Borwse podcasts</button>
        </div>
      </div>
      <div className="sidebarBottomSection">
        <div className="sidebarBottomSectionTopContainer">
        {
              Texts.map((ele)=>{
                return (
                  <p>{ele}</p>
                )
              })
            }
              
        </div>
        <div className="sidebarBottomSectionBottomContainer">
            <div className="sidebarBottomSectionBottomSection">
            <p>Cookies</p>
            <button>
            <h3><i class="fas fa-globe"></i> English</h3>
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar