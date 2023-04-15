import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from '../../pages/homepage';
import Login from '../../pages/loginpage';
<<<<<<< HEAD
import ProductPage from '../../pages/productpage'
// import Landing from '../../pages/landingpage'
=======
import Category from '../../pages/categorypage';
>>>>>>> 76018858b8f07bab282b079b25d07ee7c72b9848

export default function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
<<<<<<< HEAD
                <Route path="/product-description" element={<ProductPage/>}/>
=======
                <Route path="/category" element={<Category/>}/>
>>>>>>> 76018858b8f07bab282b079b25d07ee7c72b9848
            </Routes>
        </Router>
    </div>
  )
}
