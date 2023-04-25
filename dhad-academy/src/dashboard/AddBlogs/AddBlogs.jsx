
import React from 'react'
import { Container } from 'react-bootstrap'
import actions from '../../actions/actions'
import  { apihttp } from '../../api/api'

import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment"

function AddBlogs() {
  const dispatch = useDispatch()  
  const addblogmessage = useSelector((state) => state.addblog.blogs)
  const getallblogs = useSelector((state) => state.addblog.getallblogs)
useEffect(() => {
    dispatch(actions.getallblogs())
   
}, [dispatch]);
// console.log(getallblogs.length);
  const [Show,setShowImage] =useState(null);
  const [description, setdescription] = useState('');
  const [details, setdetails] = useState('');
  const [title, settitle] = useState('');

  const [image, setImage] = useState(null);
  const handleSubmitBlog = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image1', image);
    formData.append('description', description);
    formData.append('details', details);
    formData.append('title', title);
    console.log(formData);
    dispatch(actions.addblogAction(formData))

    dispatch({type:'wait for upload'})
   

  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImage(selectedFile);
    setShowImage(URL.createObjectURL(event.target.files[0]))
  };



  return (
    <>
    <Container className='py-5'>
        <div className='w-50 m-auto'>
        <h4 className='pb-3'>BLOGS</h4>
    <form className='' onSubmit={handleSubmitBlog} encType="multipart/form-data">
              <div className='row'>
                <div className="col-12 form-group pb-2">
                  <label className="px-2 opacity-75" htmlFor="title">title</label>
                  <input type="text" value={title} onChange={(event) => settitle(event.target.value)} required id="title" className="form-control" />
                </div>
                <div className="col-12 form-group pb-2">
                  <label className="px-2 opacity-75" htmlFor="description">description</label>
                  <input type="text" value={description} onChange={(event) => setdescription(event.target.value)} required id="description" className="form-control" />
                </div>

                <div className="col-12 form-group pb-2">
                  <label className="px-2 opacity-75" htmlFor="details">details</label>
                  <input type="text" value={details} onChange={(event) => setdetails(event.target.value)} required id="details" className="form-control" />
                </div>

             
                <div className="form-group col-12 pb-2">

                <label htmlFor="image">Image:</label>
      <input type="file" className="form-control-file" id="image"  onChange={handleImageChange} accept="image/*" required />
      </div>
<img src={Show} alt="" />
              <div className="pt-4 col-12">
                <button type="submit" className="w-100 btn-submit btn px-5">create Blog</button>
              </div>
              </div>

            </form>
        </div>
        {addblogmessage? <h1>{addblogmessage}</h1>:''}
    </Container>
    <div>
      { getallblogs.length> 0?getallblogs.map(blogs => (
        <div key={blogs._id}>
          <p>{moment(blogs.createdAt).fromNow()}</p>
          <h2>{blogs.title}</h2>
          <p>{blogs.description}</p>
          <p> {blogs.details}</p>
          <p> {blogs.image}</p>
          <img src={`${apihttp}${blogs.image}`} width={"50%"} alt="" />
          <button>delete</button>
          <button>update</button>

          
        
        </div>
      )):<div>no blogs</div>}
    </div>
    </>
  )
}

export default AddBlogs





















