import React, { useEffect, useState } from 'react'
import CommonSection from '../Common-section/CommonSection';
import course from "../../assets/images/courses.png"
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { apihttp } from "../../api/api"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Courses() {


  const user = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null
  const nav = useNavigate();

  useEffect(() => {
    document.title ="Courses";  
  }, []);
  const {name}=useParams();


  const [courses, setCourses] = useState([]);
  const [coursesUsers, setcoursesUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/course/getCourse?coursedepartment=${name}`);
        setCourses(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [name]);

  const handellerEnroll = async (course) => { 
    if (user) {
      try {
        await axios.post(`${apihttp}userRegistration/enrollment/${course._id}`, null, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        .then((response) => {
          if (response.status === 201) { // Check if the response status is successful
            toast.success('You have successfully enrolled in the course contact us to display all matrials!'); // Display a success message using toast
            // nav(`/course/${course.title}`); // Redirect to the course page
            console.log(response);
          }
        });
      } catch (error) {
        console.log('Error creating user:', error);
      }
    } else {
      nav('/myprofile');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apihttp}userRegistration/courses/${user._id}`);
        
        console.log(res.data);
        setcoursesUsers(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);






    
  
  
  return (
    <>
      <CommonSection title={name} img={`${course}`} />
      <Container className='py-5'>
      <div className="row d-flex justify-content-center">
      <ToastContainer />
      {courses.map((course) => (
                <div key={course._id} className="col-10 col-md-6 col-lg-4 pb-5">
                {/* <NavLink to={`/course/${course.title}`} className="text-decoration-none"> */}
                    <div className="card rounded-3">
                    <img src={require("../../assets/images/course.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i>{course.hours} Hours</p>
                                <h6 className="card-text">{course.title} </h6>
                                <span>${course.price}</span>
                                <p className=' d-inline px-3 text-decoration-line-through'>${course.price}</p>
                               

                        
        <button onClick={()=>handellerEnroll(course)} className="w-100 btn-submit btn px-5">
        Enroll Now
        </button>
        </div>
                    </div>
                {/* </NavLink> */}
                    </div>
                        ))} 

                </div>
      </Container>
           <div>     {coursesUsers.map((el)=>(<div>
                    <h1>{el.course}</h1>
                  </div>))}
                  
               
                </div>
    </>
  )
}

export default Courses
