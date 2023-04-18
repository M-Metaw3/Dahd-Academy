import React from 'react'
import { Container } from 'react-bootstrap'
import actions from '../../actions/actions'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Register() {
  const dispatch = useDispatch()  
  const [Show,setShowImage] =useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setconPassword] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
 if(   password!=conpassword ){
  console.log("object");
 }
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    console.log(formData);
 dispatch(actions.registrationaction(formData))

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
    <form className='' onSubmit={handleSubmit} encType="multipart/form-data">
              <div className='row'>
                <div className="col-12 form-group pb-2">
                  <label className="px-2 opacity-75" htmlFor="email">Email</label>
                  <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required id="email" className="form-control" />
                </div>
                <div className="col-12 form-group pb-2">
                  <label className="px-2 opacity-75" htmlFor="Full-Name">Full Name</label>
                  <input type="text" value={name} onChange={(event) => setName(event.target.value)} required id="Full-Name" className="form-control" />
                </div>

                <div className="col-12 form-group pb-2">
                  <label className="px-2 opacity-75" htmlFor="Password">Password</label>
                  <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required id="Password" className="form-control" />
                </div>

                <div className="form-group col-12 pb-2">
                  <label className="px-2 opacity-75" htmlFor="Confirm-Password" >Confirm Password</label>
                  <input type="password" value={conpassword} onChange={(event) => setconPassword(event.target.value)} required id="Confirm-Password" className="form-control" />
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

    </Container>
      
    </>
  )
}

export default Register





















