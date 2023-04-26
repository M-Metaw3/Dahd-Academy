import React from 'react'
import { NavLink } from 'react-router-dom'

function OurServices() {
  return (
    <>
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
      
    </>
  )
}

export default OurServices
