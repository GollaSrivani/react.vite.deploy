import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Project from './components/Project'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
 return  (

<BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/"    element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills"  element={<Skills />} />
        <Route path="/contact"  element={<ContactMe />} />
      </Routes>
    </BrowserRouter>

 );
  
}

export default App
