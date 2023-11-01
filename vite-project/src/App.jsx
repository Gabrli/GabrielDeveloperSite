import React, { useState } from 'react'
import NavBar from './components/navBar'
import MainBG from './components/bg'
import Home from './components/home'
import SideMenu from './components/sideMenu'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'
function App() {
  
  const [sideMenu, setSideMenu] = useState(false)
  const [clientY, setClientY] = useState(window.scrollY)

  return (
    <>
    <MainBG/>
    <NavBar clientY={clientY} sideMenu={sideMenu} setSideMenu={setSideMenu}/>
    <Home/>
    <About/>
    <Projects/>
    <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu}/>
    <Footer/>
    </>
  )
}

export default App
