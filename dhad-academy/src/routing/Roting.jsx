import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Courses from '../components/Courses/Courses';
import Services from '../components/Services/Services';
import Teachers from '../components/Teachers/Teachers';
import Contact from '../components/Contact/Contact';
import Blog from '../components/Blog/Blog';
import Admin from '../dashboard/Admin/Admin';
import Contacts from '../dashboard/Contacts/Contacts';
import BlogDetails from '../components/Blog-Details/BlogDetails';
import Login from '../dashboard/login/Login';
import Register from '../dashboard/Register/Register';
const Roting = () => {
    return (
        <>      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/instructors" element={<Teachers/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/admin" element={<Admin/>} >
        <Route path='/admin/contacts' element={<Contacts/>} />
        {/* <Route path="/admin" element={<Contacts/>} /> */}

        </Route>

      </Routes>
    
        </>
    );
}

export default Roting;
