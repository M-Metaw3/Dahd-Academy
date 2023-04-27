
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment"
function Instructor(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data } = await axios.get('http://localhost:5000/blog');
    setBlogs(data.body);
    console.log(data.body);
  };
  return (
    // <div className='py-3 py-lg-5 d-flex flex-column mx-3 mx-md-5'>
    //   <img className='rounded-4 ' src={props.img} alt={props.name}  width={"100%"}/>
    //   <h4 className='' >{props.name}</h4>
    //   <p>{props.position}</p>
    // </div>
    <>
    
    {blogs.map((blog) => (
        <div className="card mb-3" key={blog._id}>
          {/* <p>{moment(blog.createdAt).fromNow()}</p> */}
          <div className="card-body">
            <h5 className="card-title">title : {blog.title}</h5>
            <p className="card-text">Description : {blog.description}</p>

            <p className="card-text">Details : {blog.details}</p>
            <img
              src={`http://localhost:5000/${blog.image}`}
              alt={blog.title}
              className="img-fluid mb-3"
              style={{ maxHeight: '300px' }}
            />
  
       
          </div>
        </div>
      ))}
    </>
  )
}

export default Instructor
