import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Links from '../components/Links/Links';
import { Link } from 'react-router-dom';
const Roting = () => {
    return (
        <div>

            
      <Routes>
        <Route index element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    
        </div>
    );
}

export default Roting;
