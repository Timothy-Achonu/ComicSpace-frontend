import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

import Login from '../loginpage/Login'




export default function index() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </Router>
    </div>
  )
}
