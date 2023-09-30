
import React, { useState } from 'react'
import NavBar from './components/navBar'
import MainBG from './components/backgroundSite'
import WelcomeContainer from './components/welcome'
import SideMenu from './components/sideMenu'
import About from './components/about'
function App() {
  
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <>
    <MainBG/>
    <NavBar sideMenu={sideMenu} setSideMenu={setSideMenu}/>
    <WelcomeContainer/>
    <About/>
    <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu}/>
    </>
  )
}

export default App
