import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Navbar from './components/navBar/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='container'>
      <Navbar>
        <Routes>
          <Route path="" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Navbar>
    </div>
  )
}

export default App
