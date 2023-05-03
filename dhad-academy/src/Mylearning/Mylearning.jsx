import React, { useState, useEffect } from "react";
import axios from "axios";
import { apihttp } from "../api/api"

const Mylearning = () => {
  const [coursesUsers, setcoursesUsers] = useState([]);
  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null

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

  return (
    <div className="card">
      <div className="card-header">
        <h3>Registered Courses</h3>
      </div>
      <div className="card-body">
        <ul>
          {coursesUsers?coursesUsers.map((course) => (
            <div>
            <li >{course.courseId.title }</li>
             <li >{course.courseId.price}</li>
             <li >{course.courseId.price}</li>

            </div>

          )):""}
        </ul>
      </div>
    </div>
  );
};

export default Mylearning;