import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import About from './Pages/About'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    </div>
  )
}

export default App