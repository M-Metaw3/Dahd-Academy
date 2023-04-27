// // import React, { useState } from 'react';

// // const Test = () => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [image, setImage] = useState(null);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const formData = new FormData();
// //     formData.append('username', username);
// //     formData.append('email', email);
// //     formData.append('password', password);
// //     formData.append('image', image);
// //     // console.log(formData);
// //     // http://localhost:5000/userRegistration
// //     fetch('http://localhost:4000/register', {
// //       method: 'POST',
// //       body: formData
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log(data);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label htmlFor="username">Username:</label>
// //       <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

// //       <label htmlFor="email">Email:</label>
// //       <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

// //       <label htmlFor="password">Password:</label>
// //       <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

// //       <label htmlFor="image">Profile Picture:</label>
// //       <input type="file" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} />

// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // };

// // export default Test;







// // import React, { useState } from 'react';
// // import './Card.css';

// // function Test({ title, image, description }) {
// //   const [isHovering, setIsHovering] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsHovering(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovering(false);
// //   };

// //   return (
// //     <div
// //       className={`card ${isHovering ? 'card-hover' : ''}`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <img src={image} alt={title} />
// //       <div className='card-content'>
// //         <h3>{title}</h3>
// //         <p>{description}</p>
// //       </div>
// //     </div>
// //   );
// // }


// // import React, { useState } from 'react';
// // import './Card.css';
// // import { Card } from 'react-bootstrap';

// // function Test({ title, image, description }) {
// //   const [isHovering, setIsHovering] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsHovering(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovering(false);
// //   };

// //   return (
// //     <Card
// //       className={`animated-card ${isHovering ? 'animated-card-hover' : ''}`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <Card.Img variant='top' src={image} alt={title} />
// //       <Card.Body>
// //         <Card.Title>{title}</Card.Title>
// //         <Card.Text>{description}</Card.Text>
// //       </Card.Body>
// //     </Card>
// //   );
// // }





// import React, { useState, useEffect } from 'react';
// import './Cursor.css';

// function Test() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (event) => {
//     setPosition({ x: event.clientX, y: event.clientY });
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className='cursor' style={{ left: position.x, top: position.y }}>
//       <div className='cursor-animation'></div>
//     </div>
//   );
// }

// export default Test;

// import React from 'react';

// const Test = () => {
//   return (
//     <div>
//       test
//     </div>
//   );
// }

// export default Test;


// import React, { useState } from 'react';
// import { createRoot } from "react-dom/client";
// import { useSpring, animated } from 'react-spring';
// // import './styles.css';


// function Test() {
//   const [state, toggle] = useState(true)
//   const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
//   return (
//     <div onClick={() => toggle(!state)}>
//       <animated.div
//         style={{
//           opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
//           transform: x
//             .interpolate({
//               range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//               output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
//             })
//             .interpolate(x => `scale(${x})`)
//         }}>
//     nada
//       </animated.div>
//     </div>
//   )
// }

// export default Test

// import React, { useState } from 'react';
// import axios from 'axios';

// function Test() {

//   const [file, setFile] = useState(null);
//   const [title, settitle] = useState('');
//   const [description, setdescription] = useState('');
//   const [url, seturl] = useState('');



//   const [progress, setProgress] = useState(0);
//   const [error, setError] = useState(null);



//   async function handleSubmit(event) {
//     event.preventDefault();
  
//     if (!file) {
//       setError('Please select a file to upload.');
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append('video', file);
//     formData.append('title', title);
//     formData.append('description', description);
  
//     const config = {
//       onUploadProgress: progressEvent => {
//         const percentCompleted = Math.round(
//           (progressEvent.loaded * 100) / progressEvent.total
//         );
//         setProgress(percentCompleted);
//       }
//     };
  
// await    axios.post('http://localhost:5000/video/addVideo', formData, config)
//       .then(response => {
//         console.log(response);
//     //  seturl(   URL.createObjectURL("http://localhost:5000/video_18.ts"))
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   return (
//     <>
//     <form onSubmit={handleSubmit}>
//       {error && <div>{error}</div>}
//       <label>
//         Title:
//         <input type="text" name="title" value={title}   onChange={(e) => settitle(e.target.value)} />
//       </label>
//       <label>
//         Description:
//         <textarea name="description" value={description}   onChange={(e) => setdescription(e.target.value)}/>
//       </label>
//       <label>
//         Video file:
//         <input type="file"   onChange={(e) => setFile(e.target.files[0])} />
//       </label>
//       <button type="submit">Upload</button>
//       <progress value={progress} max="100" />
//       <iframe src="" frameborder="0"></iframe>
     


     

//     </form>
//     <div>
//       <h1>Video Player</h1>
//       <video width="560" height="315" controls>
//         <source src="http://localhost:5000/video/getVideo" />
//         Your browser does not support the video tag.
//       </video>
//     </div>

//     </>
//   );
// }

// export default Test;









// download video



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [videoUrl, setVideoUrl] = useState('');

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const headers = { Range: 'bytes=0-' };
//         const response = await axios.get('http://localhost:5000/video/getVideo', { headers, responseType: 'blob' });
//         const videoUrl = URL.createObjectURL(response.data);
//         console.log(response.data);
//         setVideoUrl(videoUrl);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchVideo();
//   }, []);

//   return (
//     <div>
//       <video width={500} controls>
//         {videoUrl && <source src={videoUrl} type="video/mp4" />}
//       </video>
//     </div>
//   );
// };

// export default Test;






// instructor test












// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
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

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/userRegistration');
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
//           'Content-Type': 'multipart/form-data'
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
//       setImg(null)

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
//     <div>
//       <h2>Create User</h2>
//       <form onSubmit={handleCreateUser}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={usernam} onChange={handleUsernamChange} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </div>
//         <div>
//           <label>Role:</label>
//           <select value={isAdmin} onChange={handleIsAdminChange}>
//             <option value="user">User</option>
//             <option value="instructor">Instructor</option>
//             <option value="Admin">Admin</option>
//           </select>
//         </div>
//         <div>
//           <img src={img} width={200} />
//           <label>Image:</label>
//           <input type="file" onChange={handleImageChange} />
//         </div>
//         {uploadProgress > 0 && (
//   <progress value={uploadProgress} max="100" />
// )}
//         <button type="submit">Create</button>
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
//   );
// };

// export default Test;






///////////////////////////addblogs//////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [details, setDetails] = useState('');
//   const [image, setImage] = useState(null);
//   const [updatingBlogId, setUpdatingBlogId] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     const { data } = await axios.get('http://localhost:5000/blog');
//     setBlogs(data.body);
//     console.log(data.body);
//   };

//   const handleFileChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleAddBlog = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('details', details);
//     formData.append('image', image);

//     try {
//       const { data } = await axios.post('http://localhost:5000/blog/addblog', formData, {
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round(
//             (progressEvent.loaded * 100) / progressEvent.total
//           );
//           setUploadProgress(progress);
//         },
//       });
//       fetchBlogs();
//       setTitle('');
//       setDescription('');
//       setDetails('');
//       setImage(null);
//       setUploadProgress(0);
//       setErrorMessage('');
      
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Error uploading file. Please try again.');
//     }
//   };

// //   const handleUpdateBlog = async (event) => {
// //     event.preventDefault();

// //     const formData = new FormData();
// //     formData.append('title', title);
// //     formData.append('description', description);
// //     formData.append('details', details);
// //     formData.append('image', image);

// //     try {
// //       const { data } = await axios.put(`/blogs/${updatingBlogId}`, formData, {
// //         onUploadProgress: (progressEvent) => {
// //           const progress = Math.round(
// //             (progressEvent.loaded * 100) / progressEvent.total
// //           );
// //           setUploadProgress(progress);
// //         },
// //       });
// //       fetchBlogs();
// //       setUpdatingBlogId(null);
// //       setTitle('');
// //       setDescription('');
// //       setDetails('');
// //       setImage(null);
// //       setUploadProgress(0);
// //     } catch (error) {
// //       console.error(error);
// //       setErrorMessage('Error updating file. Please try again.');
// //     }
// //   };

// //   const handleEditBlog = (blog) => {
// //     setTitle(blog.title);
// //     setDescription(blog.description);
// //     setDetails(blog.details);
// //     setImage(blog.image);
// //     setUpdatingBlogId(blog._id);
// //   };

//   const handleDeleteBlog = async (blog) => {
//     try {
//       await axios.delete(`http://localhost:5000/blog/${blog._id}`);
//       fetchBlogs();
//       setErrorMessage('');

//     } catch (error) {
//       console.error(error);
//       setErrorMessage('Error deleting file. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Blogs</h1>

//       {/* <form onSubmit={updatingBlogId ? handleUpdateBlog : handleAddBlog}> */}
//       <form onSubmit={ handleAddBlog}>

//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             className="form-control"
//             id="title"
//             value={title}
//             onChange={(event) => setTitle(event.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             className="form-control"
//             id="description"
//             value={description}
//             onChange={(event) => setDescription(event.target.value)}
//             required
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="details">Details</label>
//           <textarea
//             className="form-control"
//             id="details"
//             value={details}
//             onChange={(event) => setDetails(event.target.value)}
//             required
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="image">Image</label>
//           <input
//             type="file"
//             className="form-control-file"
//             id="image"
//             onChange={handleFileChange}
//           />
//           {uploadProgress > 0 && (
//             <div className="progress mt-2">
//               <div
//                 className="progress-bar"
//                 role="progressbar"
//                 style={{ width: `${uploadProgress}%` }}
//                 aria-valuenow={uploadProgress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               >
//                 {uploadProgress}%
//               </div>
//             </div>
//           )}
//         </div>

//         <button type="submit" className="btn btn-primary">
//           {updatingBlogId ? 'Update Blog' : 'Add Blog'}
//         </button>
//       </form>

//       {errorMessage && (
//         <div className="alert alert-danger mt-3">{errorMessage}</div>
//       )}

//       <hr />

//       {blogs.map((blog) => (
//         <div className="card mb-3" key={blog._id}>
//           <div className="card-body">
//             <h5 className="card-title">{blog.title}</h5>
//             <p className="card-text">{blog.description}</p>
//             <p className="card-text">{blog.details}</p>
//             <img
//               src={`http://localhost:5000/${blog.image}`}
//               alt={blog.title}
//               className="img-fluid mb-3"
//               style={{ maxHeight: '300px' }}
//             />
//             {/* <button
//               className="btn btn-primary mr-2"
//               onClick={() => handleEditBlog(blog)}
//             >
//               Edit
//             </button> */}
//             <button
//               className="btn btn-danger"
//               onClick={() => handleDeleteBlog(blog)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Test;