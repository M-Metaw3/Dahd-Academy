
// import React from 'react'
// import { Container } from 'react-bootstrap'
// import actions from '../../actions/actions'
// import  { apihttp } from '../../api/api'

// import { useState,useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import moment from "moment"

// function AddBlogs() {
//   const dispatch = useDispatch()  
//   const addblogmessage = useSelector((state) => state.addblog.blogs)
//   const getallblogs = useSelector((state) => state.addblog.getallblogs)
// useEffect(() => {
//     dispatch(actions.getallblogs())
   
// }, [dispatch]);
// // console.log(getallblogs.length);
//   const [Show,setShowImage] =useState(null);
//   const [description, setdescription] = useState('');
//   const [details, setdetails] = useState('');
//   const [title, settitle] = useState('');

//   const [image, setImage] = useState(null);
//   const handleSubmitBlog = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('image1', image);
//     formData.append('description', description);
//     formData.append('details', details);
//     formData.append('title', title);
//     console.log(formData);
//     dispatch(actions.addblogAction(formData))

//     dispatch({type:'wait for upload'})
   

//   };

//   const handleImageChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setImage(selectedFile);
//     setShowImage(URL.createObjectURL(event.target.files[0]))
//   };



//   return (
//     <>
//     <Container className='py-5'>
//         <div className='w-50 m-auto'>
//         <h4 className='pb-3'>BLOGS</h4>
//     <form className='' onSubmit={handleSubmitBlog} encType="multipart/form-data">
//               <div className='row'>
//                 <div className="col-12 form-group pb-2">
//                   <label className="px-2 opacity-75" htmlFor="title">title</label>
//                   <input type="text" value={title} onChange={(event) => settitle(event.target.value)} required id="title" className="form-control" />
//                 </div>
//                 <div className="col-12 form-group pb-2">
//                   <label className="px-2 opacity-75" htmlFor="description">description</label>
//                   <input type="text" value={description} onChange={(event) => setdescription(event.target.value)} required id="description" className="form-control" />
//                 </div>

//                 <div className="col-12 form-group pb-2">
//                   <label className="px-2 opacity-75" htmlFor="details">details</label>
//                   <input type="text" value={details} onChange={(event) => setdetails(event.target.value)} required id="details" className="form-control" />
//                 </div>

             
//                 <div className="form-group col-12 pb-2">

//                 <label htmlFor="image">Image:</label>
//       <input type="file" className="form-control-file" id="image"  onChange={handleImageChange} accept="image/*" required />
//       </div>
// <img src={Show} alt="" />
//               <div className="pt-4 col-12">
//                 <button type="submit" className="w-100 btn-submit btn px-5">create Blog</button>
//               </div>
//               </div>

//             </form>
//         </div>
//         {addblogmessage? <h1>{addblogmessage}</h1>:''}
//     </Container>
//     <div>
//       { getallblogs.length> 0?getallblogs.map(blogs => (
//         <div key={blogs._id}>
//           <p>{moment(blogs.createdAt).fromNow()}</p>
//           <h2>{blogs.title}</h2>
//           <p>{blogs.description}</p>
//           <p> {blogs.details}</p>
//           <p> {blogs.image}</p>
//           <img src={`${apihttp}${blogs.image}`} width={"50%"} alt="" />
//           <button>delete</button>
//           <button>update</button>

          
        
//         </div>
//       )):<div>no blogs</div>}
//     </div>
//     </>
//   )
// }

// export default AddBlogs

















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment"

const AddBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);
  const [updatingBlogId, setUpdatingBlogId] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data } = await axios.get('http://localhost:5000/blog');
    setBlogs(data.body);
    console.log(data.body);
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleAddBlog = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('details', details);
    formData.append('image', image);

    try {
      const { data } = await axios.post('http://localhost:5000/blog/addblog', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });
      fetchBlogs();
      setTitle('');
      setDescription('');
      setDetails('');
      setImage(null);
      setUploadProgress(0);
      setErrorMessage('');
      
    } catch (error) {
      console.error(error);
      setErrorMessage('Error uploading file. Please try again.');
    }
  };


  const handleDeleteBlog = async (blog) => {
    try {
      await axios.delete(`http://localhost:5000/blog/${blog._id}`);
      fetchBlogs();
      setErrorMessage('');

    } catch (error) {
      console.error(error);
      setErrorMessage('Error deleting file. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Blogs</h1>

      <form onSubmit={ handleAddBlog}>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea
            className="form-control"
            id="details"
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            onChange={handleFileChange}
          />
          {uploadProgress > 0 && (
            <div className="progress mt-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${uploadProgress}%` }}
                aria-valuenow={uploadProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {uploadProgress}%
              </div>
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          {updatingBlogId ? 'Update Blog' : 'Add Blog'}
        </button>
      </form>

      {errorMessage && (
        <div className="alert alert-danger mt-3">{errorMessage}</div>
      )}

      <hr />

      {blogs.map((blog) => (
        <div className="card mb-3" key={blog._id}>
          <p>{moment(blog.createdAt).fromNow()}</p>
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
  
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteBlog(blog)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddBlogs;



