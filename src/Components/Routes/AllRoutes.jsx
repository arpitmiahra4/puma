import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

const AllRoutes = () => {
  return (
    <Routes>
        
        <Route path='/' element={<Navbar />}></Route>
    </Routes>
  )
}

export default AllRoutes