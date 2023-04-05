import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import Links from '../components/Links/Links';
import { Link } from 'react-router-dom';
import About from '../components/About/About';
import Courses from '../components/Courses/Courses';
import Services from '../components/Services/Services';
import Teachers from '../components/Teachers/Teachers';
import Contact from '../components/Contact/Contact';
const Roting = () => {
    return (
        <div>

            
      <Routes>
        <Route index element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/teachers" element={<Teachers/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    
        </div>
    );
}

export default Roting;
