/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar.jsx";

import { Home, About, Products, Services, Contact } from "./components/pages";

import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
