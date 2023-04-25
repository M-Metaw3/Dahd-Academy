import React, { useEffect, useState } from 'react'
import CommonSection from '../Common-section/CommonSection';
import blog from "../../assets/images/blog.png"
import { Container } from 'react-bootstrap';
// import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination'
// import Pagination from "react-pagination-js";
// import "react-pagination-js/dist/styles.css"; 
import "./blog.css"
import { NavLink } from 'react-router-dom';


function Blog() {
    useEffect(() => {
        document.title = "Contact";
        dots[0].classList.add("active-circle");
    }, []);
    const [list, setList] = useState([1, 2, 3])
    let dots = document.getElementsByClassName("pagination-circle");

    const handleClick = (index) => {
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active-circle");

        }
        dots[index].classList.add("active-circle");

    };




    return (
        <>
            <CommonSection title="BLOG" img={`${blog}`} />
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

                <div className='d-flex justify-content-center align-items-center'>
                    {/* <p
              className={isActive ? "active-circle d-flex justify-content-center align-items-center pagination-circle" :"d-flex justify-content-center align-items-center pagination-circle" }
              onClick={handleClick}>1</p>
                <p 
              className={isActive ? "active-circle d-flex justify-content-center align-items-center pagination-circle" :"d-flex justify-content-center align-items-center pagination-circle" }
              onClick={handleClick} >2</p>
                <p
              className={isActive ? "active-circle d-flex justify-content-center align-items-center pagination-circle" :" d-flex justify-content-center align-items-center pagination-circle" }
              onClick={handleClick} >3</p> */}
                    {list.map((item, index) => {
                        return (
                            <p
                                key={item}
                                onClick={() => handleClick(index)}
                                className="d-flex justify-content-center align-items-center pagination-circle"
                            >

                                {item}
                            </p>
                        )
                    })}


                </div>

            </Container>


        </>
    )
}

export default Blog
