import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { apihttp } from "../../api/api"

function EnrollmentRequests() {
  const [enrollmentRequests, setEnrollmentRequests] = useState([]);

  useEffect(() => {
    async function fetchEnrollmentRequests() {
      try {
        const response = await axios.get('/api/enrollment-requests');
        setEnrollmentRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEnrollmentRequests();
  }, []);

  async function handleAccept(enrollmentRequest) {
    try {
      const response = await axios.put(`/api/enrollment-requests/${enrollmentRequest._id}`, {
        status: 'accepted'
      });
      if (response.status === 200) {
        setEnrollmentRequests(prevState => prevState.filter(req => req._id !== enrollmentRequest._id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleReject(enrollmentRequest) {
    try {
      const response = await axios.put(`/api/enrollment-requests/${enrollmentRequest._id}`, {
        status: 'rejected'
      });
      if (response.status === 200) {
        setEnrollmentRequests(prevState => prevState.filter(req => req._id !== enrollmentRequest._id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Enrollment Requests</h1>
      <table className="table">
        <thead>
          <tr>
            <th>User</th>
            <th>Course</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrollmentRequests.map((enrollmentRequest) => (
            <tr key={enrollmentRequest._id}>
              <td>{enrollmentRequest.userId.name}</td>
              <td>{enrollmentRequest.courseId.title}</td>
              <td>{enrollmentRequest.status}</td>
              <td>
                <button className="btn btn-success mr-2" onClick={() => handleAccept(enrollmentRequest)}>Accept</button>
                <button className="btn btn-danger" onClick={() => handleReject(enrollmentRequest)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrollmentRequests;