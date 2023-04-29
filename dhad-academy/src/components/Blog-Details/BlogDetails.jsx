import React, { useEffect, useState } from 'react'
import "./blog-details.css"
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BlogDetails() {
    const { id } = useParams();
    const [blogs, setBlogs] = useState({});
    const [text, setcomment] = useState("");
    const users = JSON.parse(localStorage.getItem("token"))?JSON.parse(localStorage.getItem("token")):null
    const nav = useNavigate()

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data } = await axios.get(`http://localhost:5000/blog/${id}`);
    setBlogs(data.body);
    console.log(data.body.comment);
console.log(blogs);
  };
  const handelercomment=async (event) => {
    event.preventDefault();
    console.log(text);
    const formData = new FormData();

    formData.append('text',text);

if(users){
    try {
   const comments =     await axios.post(`http://localhost:5000/blog/comment/${id}`, {text}, {
          headers: {
            // 'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${users.token}`,
          }
        });
    
        console.log(blogs);
     setcomment('')
      } catch (error) {
        console.log('Error creating user:', error);
      }}
      else{
nav('/myprofile')
      }
 
  }

    return (
        <>
            <img src={require("../../assets/images/image 5.png")} width={"100%"} height={300} alt="..." />
            <Container className=' py-5'>
                <Row className='d-flex justify-content-between'>
                    <Col sm="12" md="9">
                        <h3>New batch graduation ceremony</h3>
                    </Col>
                    <Col sm="12" md="3" className=' text-md-end'>
                        <p>January 10, 2022</p>
                    </Col>
                    <Col >
                        <p>
                            Vestibulum posuere arcu lobortis mattis. elit. amet non facilisis nec quis augue. id consequat. quis finibus rutrum suscipit, rhoncus Cras Suspendisse id mattis tristique tristique Pellentesque quis eleifend in eros nibh. orci, mattis nec malesuada tempor lacus. efficitur, ultricies. nibh nec Pellentesque feugiat convallis. efficitur et tempor Curabitur ut odio. dictum efficitur tempor pulvinar, Integer at fringilla tincidunt egestas eleifend non, pulvinar pulvinar eu eget efficitur eu a, ligula. enim egestas mattis egestas posuere amet, sodales ornare, bibendum ipsum sagittis. lacus in vestibulum. dolor molestie Donec Suspendisse aliquet rhoncus massa, eu mauris, interdum Vivamus risus nisl. cursus dapibus. pharetra in massa. nec egestas vulputate nibh interdum accumsan mauris, lacus. rhoncus habitasse consectetur aliquet nunc. eu vulputate lacus congue neque efficitur. nunc nibh, ac. auctor, Curabitur mauris.
                        </p>
                    </Col>
                </Row>
                <hr className=' my-3' />
                <h5 className=' mt-4 fw-normal'>Comment</h5>
                <div className='hr'></div>
                <Row className=' d-flex justify-content-center mt-4'>
                 
                    <Col xs={11} className='p-2'>
                        {blogs && blogs.comment ?blogs.comment.map((comment)=>(
<div>
                    <Col xs={1} className=' text-center p-2'>
                      
                        <img width={50} src={`http://localhost:5000/${comment.image}`} alt="" srcset="" />
                        
                    </Col>
                            <h5>{comment.username}</h5>
                            <h5>{comment.username}</h5>


                            <p>{comment.text}</p>
                            </div>
                        )):"" }
                    </Col>

                </Row>
                <h5 className=' mt-4 fw-normal'>Write Comment</h5>
                <div className='hr'></div>
                <Row className='d-flex align-items-center mt-4'>
                    <Col xs={1} className=' text-center '>
                        <i className=" w-25 fa-regular fa-circle-user fa-2xl"></i>
                    </Col>

                    <Col xs={11} className=''>
                        <form action="" onSubmit={handelercomment} className='row d-flex align-items-center'>
                            <div className='col-8 col-sm-9 col-md-10 '>
                            <input type="text" value={text} onChange={(e)=>setcomment(e.target.value)}  className="mx-2 form-control " id="inputPassword2" />
                            </div>
                            <div className='col-4 col-sm-3 col-md-2'>
                            <button type="submit"  className="btn-submit btn w-100">post</button>
                            </div>
                        </form>
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default BlogDetails
