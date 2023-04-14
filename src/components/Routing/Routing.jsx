import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from '../../pages/homepage';
import Login from '../../pages/loginpage';
import Landing from '../../pages/landingpage'

export default function Routing() {
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
