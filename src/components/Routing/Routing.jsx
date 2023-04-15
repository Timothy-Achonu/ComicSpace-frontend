import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from '../../pages/homepage';
import Login from '../../pages/loginpage';
import ProductPage from '../../pages/productpage/index'
import Category from '../../pages/categorypage';

export default function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/product-description" element={<ProductPage/>}/> 
                <Route path="/category" element={<Category/>}/>
            </Routes>
        </Router>
    </div>
  )
}
