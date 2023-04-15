import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from '../../pages/homepage';
import Login from '../../pages/loginpage';
import Category from '../../pages/categorypage/Category'

export default function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/category" element={<Category/>}/>
                
            </Routes>
        </Router>
    </div>
  )
}
