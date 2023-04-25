import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import services from "../../assets/images/services.png"
import { Container } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';

function Courses() {
  useEffect(() => {
    document.title ="Courses";  
  }, []);
  const {name}=useParams();
   
  console.log(name);
  return (
    <>
      <CommonSection title={name} img={`${services}`} />
      <Container className='py-5'>
      <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-6 col-lg-4 pb-5">
                    <div className="card rounded-20">
                    <img src={require("../../assets/images/image 5.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <NavLink to={"/blog/1"} className='text-decoration-none text-dark'>
                                Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                    <div className="card rounded-20">
                    <img src={require("../../assets/images/image 5.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                    <div className="card rounded-20">
                    <img src={require("../../assets/images/image 5.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                    <div className="card rounded-20">
                        <img src={require("../../assets/images/image 5.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                    <div className="card rounded-20">
                    <img src={require("../../assets/images/image 5.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                    <div className="card rounded-20">
                    <img src={require("../../assets/images/image 5.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
      </Container>
    </>
  )
}

export default Courses
