
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment"
import { apihttp } from "../../api/api"
function Instructor(props) {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  // const fetchBlogs = async () => {
  //   const { data } = await axios.get('http://localhost:5000/blog');
  //   setBlogs(data.body);
  //   console.log(data.body);
  // };
  
  return (

    <>
      <div className='py-3 py-lg-5 d-flex flex-column mx-3 mx-md-5'>
        <img className='rounded-4 ' src={props.img} alt={props.name} width={"100%"} height={250}  />
        <h4 className=' pt-3' >{props.name}</h4>
        <p>{props.position}</p>
      </div>
    </>
  )
}

export default Instructor
