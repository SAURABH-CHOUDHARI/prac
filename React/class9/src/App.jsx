import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'

import About from './Pages/About'
import Navbar from './Components/Navbar'
import Courses from './Pages/Courses'
import Kodr from './Pages/Kodr'
import Domination from './Pages/Domination'
import Details from './Pages/Details'
import Error from './Pages/Error'

const App = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/Courses' element={<Courses/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Kodr' element={<Kodr/>}></Route>
      <Route path='/Courses/:id/' element={<Domination/>}/>
      <Route path='/Courses/:id/Details' element={<Details/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </div>
  )
}

export default App