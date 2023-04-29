import React, { useEffect, useState } from 'react'
import CommonSection from '../Common-section/CommonSection';
import course from "../../assets/images/courses.png"
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import axios from "axios";

function Courses() {
  useEffect(() => {
    document.title ="Courses";  
  }, []);
  const {name}=useParams();

  
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/course/getCourse");
        setCourses(res.data.body.getCourse);
        console.log(res.data.body.getCourse)
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
                <div className="col-10 col-md-6 col-lg-4 pb-5">
                <NavLink to={"/course/Arabic for non-native speakers"} className="text-decoration-none">
                    <div className="card rounded-3">
                    <img src={require("../../assets/images/course.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i>49 Hours</p>
                                <h6 className="card-text">Arabic for non-native speakers  </h6>
                                <span>$83</span>
                                <p className=' d-inline px-3 text-decoration-line-through'>$183</p>

                            </div>
                    </div>
                </NavLink>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                <NavLink to={"/course/Arabic for non-native speakers"} className="text-decoration-none">
                    <div className="card rounded-3">
                    <img src={require("../../assets/images/course.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i>49 Hours</p>
                                <h6 className="card-text">Arabic for non-native speakers  </h6>
                                <span>$83</span>
                                <p className=' d-inline px-3 text-decoration-line-through'>$183</p>

                            </div>
                    </div>
                </NavLink>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                <NavLink to={"/course/Arabic for non-native speakers"} className="text-decoration-none">
                    <div className="card rounded-3">
                    <img src={require("../../assets/images/course.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i>49 Hours</p>
                                <h6 className="card-text">Arabic for non-native speakers  </h6>
                                <span>$83</span>
                                <p className=' d-inline px-3 text-decoration-line-through'>$183</p>

                            </div>
                    </div>
                </NavLink>
                    </div>
                  
                </div>
      </Container>
    </>
  )
}

export default Courses
