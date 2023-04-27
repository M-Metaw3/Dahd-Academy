import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bg from "../../assets/images/home-bg.png"
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions/actions';
import * as api from '../../api/api'
import moment from "moment"
import { Container } from 'react-bootstrap';
import OurServices from '../Services/OurServices';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch()
    const selector2 = useSelector((state) => state.teacher);
    const [video, setVideo] = useState(null);

    useEffect(() => {
        // console.log("getEmpDetails");
        dispatch(actions.getALLcontact())
    }, [dispatch]);

    useEffect(() => {
        const fetchVideo = async () => {
          try {
            const headers = { Range: 'bytes=0-' };
            const response = await axios.get('http://localhost:5000/video/getVideo', { headers, responseType: 'blob' });
            const videoUrl = URL.createObjectURL(response.data);
            const videoId = response.headers['video-id'];
    
            setVideo(videoUrl);
          } catch (error) {
            console.error(error);
          }
        };
        fetchVideo();
      }, []);

// console.log( moment(Date).fromNow());

    const [file, setfile] = useState('')

    // console.log(file);

    // useEffect(() => {
    //     console.log("HomeComponent");

    //     dispatch({type:"getAllTeacher"})
    //   }, []);

    console.log(selector2.teachers);
    return (
        <>
            <section className="position-relative text-center">
                {/* <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> */}

                {/* <a href='http://localhost:5000/197 Section Intro.mp4' download>Click to download</a> */}
                <img src={bg} alt="" className='w-100' height={450} />
                <div className='position-absolute top-50 start-50 translate-middle text-center row w-75 m-auto d-flex justify-content-center align-items-center'>
                <img src={require("../../assets/images/big logo.png")} alt="" className=' col-4'/>
                <div className='col-1'></div>
                <h3 className="text-light text-uppercase col-6">A journey of a thousand miles begins with a single step.</h3>
                </div>

            </section>


            <Container className='py-5'>
            <div className=' mx-2 row d-flex justify-content-center align-items-center'>
            <div className='col-6'>
                    <img src={require("../../assets/images/home.png")} className=' d-flex w-75 m-auto rounded-4' alt="" />
                </div>
                <div className='col-6 py-3'>
                    <h2 className=' fw-semibold'>We are Experts
                        <br/>Learning
                        <br/> Institution</h2>
                </div>
                </div>
                <div className='services'>
                <OurServices/>
                </div>
            </Container>
            <div>
              <video width={"100%"} height={400} controls>
                {video && <source src={video} type="video/mp4" />}
              </video>
            </div>
            <Container className='pb-5'>
            <div className='row pt-5  justify-content-center '>
            <h3 className='col-12 text-center  pb-5'>Recent Posts</h3>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                        <div className="card rounded-20">
                            <img src={require("../../assets/images/image 5.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <NavLink to={"/blog/1"} className='text-decoration-none text-dark'>
                                    Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                        <div className="card rounded-20">
                            <img src={require("../../assets/images/image 5.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 pb-5">
                        <div className="card rounded-20">
                            <img src={require("../../assets/images/image 5.png")} className="rounded-img-top " alt="..." />
                            <div className="card-body">
                                <p className="card-title"><i className="fa-regular fa-clock pe-1"></i> January 10, 2022</p>
                                <h6 className="card-text">
                                    New batch graduation ceremony
                                </h6>
                                <a href="/" className='text-decoration-none text-dark'>Read More<i className="fa-solid fa-arrow-right-long ps-2 text-dark fs-6"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </Container>
            
            {/* {
                selector2.teachers ? selector2.teachers.map((data)=>(
                    <div key={data.id}>
                        <h2>{data.name}</h2>
                        <h6>{data.createdAt}</h6>
                        <h6>{moment(data.createdAt).fromNow()}</h6>
                    </div>
                )) :""
            }
            <img src={`${api.apihttp}startup-g3174bf914_1920.jpg`} width={"50%"} alt="" /> */}

        </>
    );
}

export default Home;
