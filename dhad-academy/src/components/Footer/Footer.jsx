import React from 'react'
import './footer.css';

function Footer() {
  return (
    <>
      <footer className="text-lg-start ">
        <div className="p-4">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                <img src={require("../../assets/images/logo.png")} alt="" width={"50%"} />
            </div>
            <div className="col-sm-12 col-md-6 mb-4 mb-md-0 mt-md-4 text-start">
            <div className="row d-flex  justify-content-center px-lg-5">
            <div className="col-6 mb-4 mb-md-0 ps-lg-5">
              <h6 className="text-uppercase mb-2 ">QUICK LINKS</h6>
              <ul className="list-unstyled">
              <li className='mb-2'>
                  <a href="#!">Home</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">About</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">Courses</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">Services</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">Teachers</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">Contact</a>
                </li>        
              </ul>
            </div>

            <div className="col-6 mb-4 mb-md-0 ">
              <h6 className="text-uppercase mb-2">COURSE CATEGORIES</h6>

              <ul className="list-unstyled">
              <li className='mb-2'>
                  <a href="#!" >Arabic</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">Quran and readings</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">Calligraphy</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">Islamic studies</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">Qualifying courses</a>
                </li>
                <li className='mb-2'>
                  <a href="#!">Field tourism</a>
                </li>
               
              </ul>
            </div>
            </div>
            </div>
          </div>
        </div>

      </footer>
    </>
    <div>
      <h1>footer</h1>
    </div>
  )
}

export default Footer
