import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from '../../pages/homepage';
import Login from '../../pages/loginpage';
import Category from '../../pages/categorypage';

export default function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/category" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Category/>}/>
            </Routes>
        </Router>
    </div>
  )
}
