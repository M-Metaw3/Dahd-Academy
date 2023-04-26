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
import Test from '../api/Test';
import AddBlogs from '../dashboard/AddBlogs/AddBlogs';
import AddCourses from '../dashboard/courses/AddCourses';
import CourseList from '../dashboard/courses/CourseList';
import CourseUpdate from '../dashboard/courses/CourseUpdate';
import Addvideo from '../dashboard/addvideotowebsite/Addvideo';
import Instructor from '../dashboard/add instructors/Instructors';
import CourseDetails from '../components/Courses/CourseDetails';
import MyProfile from '../components/My Profile/MyProfile';

const Roting = () => {
const users = JSON.parse(localStorage.getItem("token"))


    return (
        <>      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/test" element={<Test/>} />

        <Route path="/about" element={<About/>} />
        {/* <Route path="/courses" element={<Courses/>} /> */}
        <Route path="/courses/:name" element={<Courses/>} />
        <Route path="/course/:name" element={<CourseDetails/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/instructors" element={<Teachers/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
        {users.isAdmin=="Admin"?   <Route path="/admin" element={<Admin/>} >
        <Route path='/admin/contacts' element={<Contacts/>} />
        <Route path='/admin/Blogs' element={<AddBlogs/>} />
        <Route path='/admin/addCourses' element={<AddCourses/>} />
        <Route path='admin/allcourses' element={<CourseList/>} />
        <Route path='admin/updatecourses' element={<CourseUpdate/>} />
        <Route path='admin/addvideo' element={<Addvideo/>} />
        <Route path='admin/instructors' element={<Instructor/>} />
        
        <Route path="/admin" element={<Contacts/>} />

        </Route>:
        <Route path="/test" element={<Test/>} />
    }

      </Routes>
    
        </>
    );
}

export default Roting;
