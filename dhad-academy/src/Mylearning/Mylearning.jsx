import React, { useState, useEffect } from "react";
import axios from "axios";
import { apihttp } from "../api/api"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Mylearning = () => {
  const [coursesUsers, setcoursesUsers] = useState([]);
  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null
  const lessons  = useSelector((state) => state.teacher)
  const dispatch = useDispatch()
  const nav = useNavigate()

console.log(lessons.lessons);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apihttp}userRegistration/courses/${user._id}`);
        setcoursesUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  const handellersendLessons = (course) => {
    
    console.log("course");
console.log(course);
    dispatch({type:"getalllessons",payload:course})
    console.log(course)
    if (course.lessons.length>0) {
      
      nav(`/course/${course.title}`)
    }
    else{
        toast.success('no lessons in this course yet '); // Display a success message using toast
     
      
    }
  }
  return (
    <div className="card">
      <div className="card-header">
      <ToastContainer />

        <h3>Registered Courses</h3>
      </div>
      <div className="card-body">
        <ul>
          {coursesUsers?coursesUsers.map((course) => (
            <div>
            <li >{course.courseId.title }</li>
             <li >{course.courseId.price}</li>
             <li >{course.courseId.price}</li>

<button onClick={()=>handellersendLessons(course.courseId)}>checkLessons</button>
            </div>
          )):"no courses yet"}
        </ul>
      </div>
    </div>
  );
};

export default Mylearning;