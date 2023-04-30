import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import "./instructors.css"
import { apihttp } from "../../api/api"
const Instructors = () => {
  const [users, setUsers] = useState([]);
  const [usernam, setUsernam] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState('user');
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadProgressu, setUploadProgressu] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));
  

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${apihttp}userRegistration`,   {   headers: {
        // 'Content-Type': 'multipart/form-data',
        // "Authorization": `Bearer ${token.token}`,

      }});
      setUsers(response.data.body);
      
    } catch (error) {
      console.log('Error getting users:', error);
    }
  };

  const handleUsernamChange = (event) => {
    setUsernam(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleIsAdminChange = (event) => {
    setIsAdmin(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    setImg(URL.createObjectURL( event.target.files[0]));



  };

  const handleCreateUser = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('name', usernam);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('isAdmin', isAdmin);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post(`${apihttp}userRegistration`, formData, {
        headers: {
          // 'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${token.token}`,

        },     onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        }
      });
      getUsers();
      setUsernam('');
      setEmail('');
      setPassword('');
      setIsAdmin('user');
      setImage('');
      setUploadProgress(0);
          setUploadProgress(null);
          setImg(null)

    } catch (error) {
      console.log('Error creating user:', error);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setUsernam(user.usernam);
    setEmail(user.email);
    setPassword(user.password);
    setIsAdmin(user.isAdmin);
  };

  const handleUpdateUser = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('usernam', usernam);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('isAdmin', isAdmin);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`${apihttp}userRegistration/${selectedUser._id}`, formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgressu(progress);
        }
      });
      getUsers();
      setSelectedUser(null);
      setUsernam('');
      setEmail('');
      setPassword('');
      setIsAdmin('user');
      setImage(null);
      setImage(null);
setImg(null)
    } catch (error) {
      console.log('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${apihttp}userRegistration/${id}`);
      getUsers();
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  };

  const [showAdd, setShowAdd] = useState(false);
  const [category, setCategory] = useState("all");

  const Add = () => setShowAdd(true);
  const sellectCategory = (category) =>{
     setShowAdd(false);
     setCategory(category)
     console.log(category)
  }
  
  return (
    <>
    <h3>Users</h3>
     <div className='py-2 instructors'>
     <button className={`btn mx-1 ${showAdd ? "":"active" }`}  onClick={()=>sellectCategory("all")}>All</button>
     <button className='btn mx-1' onClick={()=>sellectCategory("Instructors")}>Instructors</button>
     <button className='btn mx-1' onClick={()=>sellectCategory("Users")}>Users</button>
     <button className='btn mx-1' onClick={()=>sellectCategory("Admins")}>Admins</button>
     <button className={`btn mx-1 ${showAdd ? "active":"" }`} onClick={Add}>Add</button>
     </div>

     {showAdd?
      <Container className='py-2'>
              {/* <h2>Create User</h2> */}
    <div className='w-50 m-auto'>
      <form onSubmit={handleCreateUser}>
      <div className='row'>
                <div className="col-12 form-group ">
                <label className="px-2 opacity-75">Username</label>
          <input className="form-control" type="text" value={usernam} onChange={handleUsernamChange} />
        </div>
        <div className="col-12 form-group ">
          <label className="px-2 opacity-75">Email</label>
          <input className="form-control" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="col-12 form-group ">
          <label>Password:</label>
          <input className="form-control" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="col-12 form-group ">
          <label className="px-2 opacity-75">Role</label>
          <select className="form-select form-select-lg" value={isAdmin} onChange={handleIsAdminChange}>
            <option value="user">User</option>
            <option value="instructor">Instructor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="col-12 form-group">
          <label className="px-2 opacity-75">Image</label>
          <input className="form-control" type="file" onChange={handleImageChange} />
          <img src={img} width={200} />

        </div>
        {uploadProgress > 0 && (
  <progress value={uploadProgress} max="100" />
)}
              <div className="pt-1 col-12">

        <button type="submit" className='w-100 btn-submit btn px-5'>Create</button>
        </div>
      </div>
      </form>
    </div>
    </Container> :

    <Container className='py-2'>
      {selectedUser && (
        <div>
                <div className='w-50 m-auto'>
                {/* <h2 className=' text-center'>Edit User</h2> */}
          <form onSubmit={handleUpdateUser}>
          <div className='row'>
              <div className="col-12 form-group ">
              <label className="px-2 opacity-75">Username</label>
              <input className="form-control" type="text" value={usernam} onChange={handleUsernamChange} />
            </div>
            <div className="col-12 form-group ">
              <label className="px-2 opacity-75">Email</label>
              <input className="form-control" type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="col-12 form-group ">
              <label className="px-2 opacity-75">Password</label>
              <input className="form-control" type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="col-12 form-group ">
              <label className="px-2 opacity-75">Role</label>
              <select className="form-select form-select-lg" value={isAdmin} onChange={handleIsAdminChange}>
                <option value="user">User</option>
                <option value="instructor">Instructor</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="col-12 form-group ">
              <label className="px-2 opacity-75">Image</label>
              <input className="form-control" type="file" onChange={handleImageChange} />
              <img src={img} width={200} />

            </div>
            {uploadProgressu > 0 && (
  <progress value={uploadProgressu} max="100" />
)}
            <div className="pt-1 col-12 text-center">
            <button className='w-25 mx-3 btn-submit btn text-cent text-centerer' type="submit">Update</button>
            <button className='w-25 mx-3 btn-submit btn text-center' onClick={() => setSelectedUser(null)}>Cancel</button>
            </div>
          </div>
          </form>
        </div>

        </div>
   
      )}
{users?users.map((user) => (

<div key={user._id} className="card m-1 m-lg-4">
        <div className="card-body d-flex row align-items-center">
          <div className='col-1 text-center'>
            {/* <i className=" w-50 fa-regular fa-circle-user fa-2xl"></i> */}
            <img src={`${apihttp}${user.image}`} alt="img" className=' rounded-circle' width={70} height={70} />
          </div>

          <div className='col-5 d-flex flex-column'>
            <span>{user.usernam}</span>
            <span>{user.email}</span>
          </div>
          <div className='col-2 text-center border-end border-start'>
          <span>{user.isAdmin}</span>
          </div>

          <div className='col-4 d-flex justify-content-evenly'>
          <button onClick={() => handleSelectUser(user)} className='btn border-0 text-decoration-underline fs-5' >Edit</button>
          <button onClick={() => handleDeleteUser(user._id)} className='btn border-0 text-decoration-underline fs-5'>Delete</button>
          </div>
        </div>
      </div>
   )):''} 

    </Container> 
    }
    </>
   
  );
};

export default Instructors;




