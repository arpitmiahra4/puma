import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
// import Women from '../Product/Women'
// import Home from '../Home/Home'


const AllRoutes = () => {
  return (
    <Routes>
        
        <Route path='/' element={<Navbar />}/>
        {/* <Route path='/women' element={<Women />}/> */}
    </Routes>
  )
}

export default AllRoutes