import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment"
import { Container } from 'react-bootstrap';

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

  const [showAdd, setShowAdd] = useState(false);
  const Add = () => setShowAdd(true);
  const All = () => setShowAdd(false);


  return (
    <>
    <h3>Blogs</h3>
     <div className='py-2 instructors'>
     <button className={`btn mx-1 ${showAdd ? "":"active" }`}  onClick={All}>All</button>
     <button className={`btn mx-1 ${showAdd ? "active":"" }`} onClick={Add}>Add</button>
     </div>
      {showAdd?
      <Container className='py-2 row'>
            <div className='col-12 col-lg-6 m-auto'>

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
            className="form-control"
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
        <div className="pt-3 col-12">

        <button type="submit" className="w-100 btn-submit btn px-5">
          {updatingBlogId ? 'Update Blog' : 'Add Blog'}
        </button>
        </div>
      </form>
      </div>

      {errorMessage && (
        <div className="alert alert-danger mt-3">{errorMessage}</div>
      )}

      </Container>
: <div>
{blogs.map((blog) => (
        <div className="card mb-3" key={blog._id}>
          <div className="card-body">
            
          <p>{moment(blog.createdAt).fromNow()}</p>
          <div className="py-3 d-flex justify-content-center">
            <img
              src={`http://localhost:5000/${blog.image}`}
              alt={blog.title}
              className="img-fluid mb-3 w-25 "
              style={{ maxHeight: '300px' }}
            />
            </div>
            <p className=' fw-bold'>title: <span className=' fw-normal'>  {blog.title}</span></p>
            <p className=' fw-bold'>Description: <span className=' fw-normal'>  {blog.description}</span></p>

            <p className=' fw-bold'>Details: <span className=' fw-normal'>  {blog.details}</span></p>
          
          <div className="pt-3 text-center">
            <button
              className=" btn-submit btn px-5"
              onClick={() => handleDeleteBlog(blog)}
            >
              Delete
            </button>
            </div>
          </div>
        </div>
      ))}

</div>
      
      }  
    </>
  
  );
};

export default AddBlogs;



