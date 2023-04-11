import React, { useEffect, useState } from 'react'
import CommonSection from '../Common-section/CommonSection';
import blog from "../../assets/images/blog.png"
import { Container } from 'react-bootstrap';
// import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination'
// import Pagination from "react-pagination-js";
// import "react-pagination-js/dist/styles.css"; 
import "./blog.css"



function Blog() {
    useEffect(() => {
        document.title = "Contact";
    }, []);

    const [isActive, setIsActive] = useState(false);
    const [list, setList] = useState([1,2,3])
    const handleClick = event => {
        setIsActive(!isActive);
      };
    



    return (
        <>
            <CommonSection title="BLOG" img={`${blog}`} />
            <Container className='py-5'>
                <div className="row">
                    <div className="col-6 col-md-4 pb-5">
                        <div className="card">
                            <img src={require("../../assets/images/image 5.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/home" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 pb-5">
                        <div className="card">
                            <img src={require("../../assets/images/image 5.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 pb-5">
                        <div className="card">
                            <img src={require("../../assets/images/image 5.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 pb-5">
                        <div className="card">
                            <img src={require("../../assets/images/image 5.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 pb-5">
                        <div className="card">
                            <img src={require("../../assets/images/image 5.png")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4 pb-5">
                        <div className="card">
                            <img src={require("../../assets/images/image 5.png")} className="card-img-top" alt="..." />
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
                <p className='d-flex justify-content-center align-items-center pagination-circle active-circle' onClick={handleClick}>1</p>
                <p className='d-flex justify-content-center align-items-center pagination-circle'>2</p>
                <p className='d-flex justify-content-center align-items-center pagination-circle'>3</p>
                {/* {list.map((item) => {
          return (
            <p
              key={item}
              onClick={handleClick} 
              className={isActive ? "active-circle d-flex justify-content-center align-items-center pagination-circle" : "d-flex justify-content-center align-items-center pagination-circle"}            >
              {item}
            </p>
          )
        })} */}


            </div>
      
            </Container>


        </>
    )
}

export default Blog
