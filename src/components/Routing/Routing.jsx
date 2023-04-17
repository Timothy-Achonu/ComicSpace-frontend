import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/homepage";
import Login from "../../pages/loginpage";
import Category from "../../pages/categorypage/Category";
import ProductPage from "../../pages/productpage/";

export default function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product-description" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product-description" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}
