import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CTA from './pages/CTA'
// import './App.css'
import Timer from './pages/Timer'
import SlideForm from './pages/SlideForm'
import PopUp from './components/PopUp'
import Hero from './pages/Hero'
import About from './pages/About'
import MeSection from './pages/MeSection'

function App() {
  

  return (
    <>
    <Hero/>
    <About/>
    <MeSection/>
    <Timer/>
    <CTA/>
    <SlideForm/>
  
    </>
    
    
  )
}

export default App
