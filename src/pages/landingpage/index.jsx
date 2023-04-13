import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

import Home from '../homepage'
import Login from '../loginpage'

export default function index() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    </div>
  )
}
