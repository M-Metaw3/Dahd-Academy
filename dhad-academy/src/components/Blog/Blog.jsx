import React, { useEffect, useState } from 'react'
import CommonSection from '../Common-section/CommonSection';
import blog from "../../assets/images/blog.png"
import { Container } from 'react-bootstrap';
import { apihttp } from "../../api/api"

import "./blog.css"
import { NavLink } from 'react-router-dom';
import axios from 'axios';


function Blog() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
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

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
      }, [currentPage]);
    
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/blog?page=${currentPage}`);
          setBlogs(response.data);
          console.log(response);
          setTotalPages(Math.ceil(response.headers['x-total-count'] / 3)); // assume limit of 3 blogs per page
        } catch (error) {
          console.error(error);
        }
      };
      const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
      };
    
      const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    return (
        <>
            <CommonSection title="BLOG" img={`${blog}`} />
            <Container className='py-5'>
                <div className="row d-flex  justify-content-center justify-content-md-start">
                {blogs.map((blog) => (

                    <div key={blog.id} className="col-10 col-sm-7 col-md-6 col-lg-4 pb-5">
                        <div className="card rounded-20">
                            
                            <img src={`${apihttp}${blog.image}`} className="rounded-img-top" height={"320"} alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i>{blog.updatedAt.split("T")[0]}</p>
                                <h6 className="card-text">{blog.title} </h6>
                                <NavLink to={`/blog/${blog.id}`} className='text-decoration-none '>
                                    Read More<i className="fa-solid fa-arrow-right-long ps-2 fs-6"></i>
                                </NavLink>
                            </div>
                        </div>

                    </div>
                              ))}
                                       

                </div>

                <div className='d-flex justify-content-center align-items-center'>
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
                <div>
        <button disabled={currentPage === 1} onClick={handlePrevPage}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next
        </button>
      </div>
  

            </Container>


        </>
    )
}

export default Blog
