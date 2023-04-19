
import React from 'react'
import { Container } from 'react-bootstrap'
import actions from '../../actions/actions'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function AddBlogs() {
  const dispatch = useDispatch()  
  const addblog = useSelector((state) => state.addblog.blogs)

  const [Show,setShowImage] =useState(null);
  const [description, setdescription] = useState('');
  const [details, setdetails] = useState('');
  const [title, settitle] = useState('');

  const [image, setImage] = useState(null);
  const handleSubmitBlog = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
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
        <div className='w-25 m-auto'>
        <h4 className='pb-3'>Register</h4>
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
      <input type="file" id="image"  onChange={handleImageChange} accept="image/*" required />
      </div>
<img src={Show} alt="" />
              <div className="pt-4 col-12">
                <button type="submit" className="w-100 btn-submit btn px-5">Register</button>
              </div>
              </div>

            </form>
        </div>
        {addblog? <h1>{addblog}</h1>:''}
    </Container>
      
    </>
  )
}

export default AddBlogs





















