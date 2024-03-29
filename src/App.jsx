import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import LandingPage from './pages/LandingPage/LandingPage'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Navbar from './components/navBar/Navbar'
import Certificates from './pages/Certificates/Certificates'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function App() {

  return (
    <div className='container'>
      <Navbar>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/certificates" element={<Certificates/>}></Route>
        </Routes>
      </Navbar>
    </div>
  )
}

export default App
