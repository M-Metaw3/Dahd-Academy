import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/userRegistration');
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
      await axios.post('http://localhost:5000/userRegistration', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
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
      setImage('null');
      setUploadProgress(0);
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
      await axios.put(`http://localhost:5000/userRegistration/${selectedUser._id}`, formData, {
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
      await axios.delete(`http://localhost:5000/userRegistration/${id}`);
      getUsers();
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleCreateUser}>
        <div>
          <label>Username:</label>
          <input type="text" value={usernam} onChange={handleUsernamChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Role:</label>
          <select value={isAdmin} onChange={handleIsAdminChange}>
            <option value="user">User</option>
            <option value="instructor">Instructor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div>
          <img src={img} width={200} />
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        {uploadProgress > 0 && (
  <progress value={uploadProgress} max="100" />
)}
        <button type="submit">Create</button>
      </form>

      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.usernam}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin}</td>
              <td><img src={`http://localhost:5000/${user.image}`} height="50px" /> </td>
              <td>
                <button onClick={() => handleSelectUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          )):''}
        </tbody>
      </table>

      {selectedUser && (
        <div>
          <h2>Edit User</h2>
          <form onSubmit={handleUpdateUser}>
            <div>
              <label>Username:</label>
              <input type="text" value={usernam} onChange={handleUsernamChange} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
              <label>Role:</label>
              <select value={isAdmin} onChange={handleIsAdminChange}>
                <option value="user">User</option>
                <option value="instructor">Instructor</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <label>Image:</label>
              <input type="file" onChange={handleImageChange} />
            </div>
            {uploadProgressu > 0 && (
  <progress value={uploadProgressu} max="100" />
)}
            <button type="submit">Update</button>
            <button onClick={() => setSelectedUser(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Instructors;