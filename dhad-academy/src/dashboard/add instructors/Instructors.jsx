// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container } from 'react-bootstrap';

// const Instructors = () => {
//   const [users, setUsers] = useState([]);
//   const [usernam, setUsernam] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isAdmin, setIsAdmin] = useState('user');
//   const [image, setImage] = useState(null);
//   const [img, setImg] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadProgressu, setUploadProgressu] = useState(0);

//   const [selectedUser, setSelectedUser] = useState(null);
//   const token = JSON.parse(localStorage.getItem("token"))

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/userRegistration',   {   headers: {
//         'Content-Type': 'multipart/form-data',
//         "Authorization": `Bearer ${token.token}`,

//       }});
//       setUsers(response.data.body);
      
//     } catch (error) {
//       console.log('Error getting users:', error);
//     }
//   };

//   const handleUsernamChange = (event) => {
//     setUsernam(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleIsAdminChange = (event) => {
//     setIsAdmin(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//     setImg(URL.createObjectURL( event.target.files[0]));


//   };

//   const handleCreateUser = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();

//     formData.append('name', usernam);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('isAdmin', isAdmin);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       await axios.post('http://localhost:5000/userRegistration', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token.token}`,

//         },     onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//           setUploadProgress(progress);
//         }
//       });
//       getUsers();
//       setUsernam('');
//       setEmail('');
//       setPassword('');
//       setIsAdmin('user');
//       setImage('null');
//       setUploadProgress(0);
//           setUploadProgress(null);
//           setImg(null)

//     } catch (error) {
//       console.log('Error creating user:', error);
//     }
//   };

//   const handleSelectUser = (user) => {
//     setSelectedUser(user);
//     setUsernam(user.usernam);
//     setEmail(user.email);
//     setPassword(user.password);
//     setIsAdmin(user.isAdmin);
//   };

//   const handleUpdateUser = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('usernam', usernam);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('isAdmin', isAdmin);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       await axios.put(`http://localhost:5000/userRegistration/${selectedUser._id}`, formData, {
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//           setUploadProgressu(progress);
//         }
//       });
//       getUsers();
//       setSelectedUser(null);
//       setUsernam('');
//       setEmail('');
//       setPassword('');
//       setIsAdmin('user');
//       setImage(null);
//       setImage(null);
// setImg(null)
//     } catch (error) {
//       console.log('Error updating user:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/userRegistration/${id}`);
//       getUsers();
//     } catch (error) {
//       console.log('Error deleting user:', error);
//     }
//   };

//   return (
//     <Container className='py-5'>
//     <div className='w-50 m-auto'>
//             <h2>Create User</h2>
//       <form onSubmit={handleCreateUser}>
//       <div className='row'>
//                 <div className="col-12 form-group ">
//                 <label>Username:</label>
//           <input className="form-control" type="text" value={usernam} onChange={handleUsernamChange} />
//         </div>
//         <div className="col-12 form-group ">
//           <label>Email:</label>
//           <input className="form-control" type="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div className="col-12 form-group ">
//           <label>Password:</label>
//           <input className="form-control" type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <div className="col-12 form-group ">
//           <label>Role:</label>
//           <select className="form-select form-select-lg" value={isAdmin} onChange={handleIsAdminChange}>
//             <option value="user">User</option>
//             <option value="instructor">Instructor</option>
//             <option value="Admin">Admin</option>
//           </select>
//         </div>
//         <div className="col-12 form-group">
//           <label>Image:</label>
//           <input className="form-control-file" type="file" onChange={handleImageChange} />
//           <img src={img} width={200} />

//         </div>
//         {uploadProgress > 0 && (
//   <progress value={uploadProgress} max="100" />
// )}
//               <div className="pt-4 col-12">

//         <button type="submit" className='w-100 btn-submit btn px-5'>Create</button>
//         </div>
//       </div>
//       </form>

//       <h2>Users</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Role</th>
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users?users.map((user) => (
//             <tr key={user._id}>
//               <td>{user._id}</td>
//               <td>{user.usernam}</td>
//               <td>{user.email}</td>
//               <td>{user.isAdmin}</td>
//               <td><img src={`http://localhost:5000/${user.image}`} height="50px" /> </td>
//               <td>
//                 <button onClick={() => handleSelectUser(user)}>Edit</button>
//                 <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
//               </td>
//             </tr>
//           )):''}
//         </tbody>
//       </table>

//       {selectedUser && (
//         <div>
//           <h2>Edit User</h2>
//           <form onSubmit={handleUpdateUser}>
//             <div>
//               <label>Username:</label>
//               <input type="text" value={usernam} onChange={handleUsernamChange} />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input type="email" value={email} onChange={handleEmailChange} />
//             </div>
//             <div>
//               <label>Password:</label>
//               <input type="password" value={password} onChange={handlePasswordChange} />
//             </div>
//             <div>
//               <label>Role:</label>
//               <select value={isAdmin} onChange={handleIsAdminChange}>
//                 <option value="user">User</option>
//                 <option value="instructor">Instructor</option>
//                 <option value="Admin">Admin</option>
//               </select>
//             </div>
//             <div>
//               <label>Image:</label>
//               <input type="file" onChange={handleImageChange} />
//             </div>
//             {uploadProgressu > 0 && (
//   <progress value={uploadProgressu} max="100" />
// )}
//             <button type="submit">Update</button>
//             <button onClick={() => setSelectedUser(null)}>Cancel</button>
//           </form>
//         </div>
//       )}
//     </div>
//     </Container>
//   );
// };

// export default Instructors;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from "moment"

const Instructors = () => {
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

export default Instructors;