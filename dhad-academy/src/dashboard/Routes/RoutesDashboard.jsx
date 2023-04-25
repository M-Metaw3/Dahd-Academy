import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Admin from '../Admin/Admin';
import Contacts from '../Contacts/Contacts';
import AddBlogs from '../AddBlogs/AddBlogs';
import AddCourses from '../courses/AddCourses';
import CourseList from '../courses/CourseList';
import CourseUpdate from '../courses/CourseUpdate';
import Addvideo from '../addvideotowebsite/Addvideo';
import Instructor from '../../components/Instructor/Instructor';

function RoutesDashboard() {
  return (
    <>
    <Routes>
    <Route path="/admin" element={<Admin/>} >
        <Route path='/admin/contacts' element={<Contacts/>} />
        <Route path='/admin/Blogs' element={<AddBlogs/>} />
        <Route path='/admin/addCourses' element={<AddCourses/>} />
        <Route path='admin/allcourses' element={<CourseList/>} />
        <Route path='admin/updatecourses' element={<CourseUpdate/>} />
        <Route path='admin/addvideo' element={<Addvideo/>} />
        <Route path='admin/instructors' element={<Instructor/>} />

        <Route path="/admin" element={<Contacts/>} />
        </Route>
    </Routes>
    </>
  )
}

export default RoutesDashboard
