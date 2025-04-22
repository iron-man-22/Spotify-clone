
import './App.css'
import "./components/Navbar/Navbar"
import Navbar from './components/Navbar/Navbar'
import Sidebar from "./components/Sidebar/Sidebar"
import MainSection from "./components/MainSection/MainSection"
import Footer from './components/footerSection/Footer'
function App() {
 

  return (
    <>
      <div className="mainContainer">
        <Navbar/>
        <div className="mainContainerSection">
          <Sidebar/>
          <MainSection/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
