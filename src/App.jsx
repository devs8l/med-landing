import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[3vw] lg:px-[3vw] md:px-[1vw] '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App