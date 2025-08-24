import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../users/Dashboard'
function Routers() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/user' element={null}>
              <Route path='dashboard' element={<PrivateRoute Component={<Dashboard/>}/>}/>
            </Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default Routers