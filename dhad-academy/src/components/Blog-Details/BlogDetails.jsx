
import React, { useEffect, useState } from 'react';
import './blog-details.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apihttp } from '../../api/api';

function BlogDetails() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});
  const [text, setComment] = useState('');
  const users = JSON.parse(localStorage.getItem('token')) || null;
  const nav = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data } = await axios.get(`${apihttp}blog/${id}`);
    setBlogs(data.body);
    console.log(data.body.comment);
  };

  const handelercomment = async (event) => {
    event.preventDefault();
    console.log(text);
    const formData = new FormData();
    formData.append('text', text);

    if (users) {
      try {
        const { data } = await axios.post(
          `${apihttp}blog/comment/${id}`,
          { text },
          {
            headers: {
             
              Authorization: `Bearer ${users.token}`,
            },
          }
        );
console.log(data);
        setBlogs((prevBlogs) => ({
          ...prevBlogs,
          comment: [...prevBlogs.comment, data.body.comment],
        }));
        setComment('');
      } catch (error) {
        console.log('Error creating user:', error);
      }
    } else {
      nav('/myprofile');
    }
  };

  console.log(blogs.updatedAt);
  return (
    <>
      <img
        src={`${apihttp}${blogs.image}`}
        width={'100%'}
        height={400}
        alt="..."
      />
      <Container className="py-5">
        <Row className="d-flex justify-content-between">
          <Col sm="12" md="9">
            <h3>{blogs.title}</h3>
          </Col>
          <Col sm="12" md="3" className=" text-md-end">
            {blogs.updatedAt ? (
              <p>{blogs.updatedAt.split('T')[0]}</p>
            ) : (
              ''
            )}
          </Col>
          <Col>
            <p>{blogs.description}</p>
          </Col>
        </Row>
        <hr className=" my-3" />
        <h5 className=" mt-4 fw-normal">Comment</h5>
        <div className="hr"></div>
        <Row className=" d-flex justify-content-center mt-4 align-items-start">
          {blogs && blogs.comment
            ? blogs.comment.map((comment) => (
                <>
                  <Col xs={1} className=" text-center p-2">
                    <img
                      width={70}
                      height={70}
                      className=" rounded-circle "
                      src={`${apihttp}${comment.image}`}
                      alt=""
                      srcset=""
                    />
                  </Col>
                  <Col xs={11} className="p-2">
                    <h5>{comment.username}</h5>
                    <p>{comment.text}</p>
                  </Col>
                </>
              ))
            : ''}
        </Row>
        <h5 className=" mt-4 fw-normal">Write Comment</h5>
        <div className="hr"></div>
        <Row className="d-flex align-items-center mt-4">
          <Col xs={1} className=" text-center ">
            <i className=" w-25 fa-regular fa-circle-user fa-2xl"></i>
          </Col>

          <Col xs={11} className="">
            <form
              action=""
              onSubmit={handelercomment}
              className="row d-flex align-items-center"
            >
              <div className="col-8 col-sm-9 col-md-10 ">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write Comment"
                  className="form-control"
                />
              </div>
              <div className="col-4 col-sm-3 col-md-2">
                <button type="submit" className="btn btn-primary px-4">
                  Submit
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BlogDetails;
