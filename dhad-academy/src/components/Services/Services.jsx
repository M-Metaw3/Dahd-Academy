import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import services from "../../assets/images/services.png"
import { Container } from 'react-bootstrap';
import './services.css'
import { NavLink } from 'react-router-dom';

function Services() {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <div>
      <CommonSection title="services" img={`${services}`} />
      <Container className='services py-5'>
        <div className='row d-flex align-items-center justify-content-center '>
          <div className='col-8 col-md-4 '>
            <img src={require("../../assets/images/Services2.png")} className='w-100 rounded-4' alt="" />
          </div>
          <div className='col-8 col-md-8 py-3 p-md-5'>
            <div className="row py-3">
              <div className="col-6 ">
                <p><i className="fa-solid fa-star fa-xl"></i></p>
                <h4>8+</h4>
                <p>Years Experience</p>
              </div>
              <div className="col-6">
                <p><i className="fa-solid fa-book-open fa-xl"></i></p>
                <h4>40+</h4>
                <p>Available Courses</p>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-6 ">
                <p>
                  <i className="fa-solid fa-user-group fa-xl"></i>
                </p>
                <h4>300+</h4>
                <p>Graduate Students</p>
              </div>
              <div className="col-6">
                <p>
                  <i className="fa-solid fa-briefcase fa-xl"></i>
                </p>
                <h4>34+</h4>
                <p>Best Instructors</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row pt-5  justify-content-center text-center '>
          <h3 className='col-12'>Our Services</h3>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
              <h5> <NavLink to="/courses/Arabic">Arabic</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Quran and readings">Quran and readings</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Islamic studies">Islamic studies</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Qualifying courses">Qualifying courses</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Crafts and Skills">Crafts and Skills</NavLink></h5>
            </div>
          </div>
          <div className="card col-5 col-lg-3 m-2 m-lg-4">
            <div className="card-body d-flex align-items-center justify-content-center">
            <h5> <NavLink to="/courses/Field Trips">Field Trips</NavLink></h5>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}

export default Services
