
import React, { useState } from 'react'
import NavBar from './components/navBar'
import MainBG from './components/backgroundSite'
import Arrow from './components/arrow'
import WelcomeContainer from './components/welcome'
import SideMenu from './components/sideMenu'
function App() {
  
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <>
    <MainBG/>
    <NavBar sideMenu={sideMenu} setSideMenu={setSideMenu}/>
    <WelcomeContainer/>
    <Arrow/>
    <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu}/>
    </>
  )
}

export default App
