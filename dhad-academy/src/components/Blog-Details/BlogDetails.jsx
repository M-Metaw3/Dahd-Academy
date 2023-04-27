import React from 'react'
import "./blog-details.css"
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function BlogDetails() {
    const { id } = useParams();

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
                    <Col sm={1} className=' text-center p-0'>
                        <i className=" w-25 fa-regular fa-circle-user fa-2xl"></i>                </Col>
                    <Col sm={11} className='p-0'>
                        <h5>Matthew Taylor</h5>
                        <p>rhoncus habitasse consectetur aliquet nunc. rhoncus habitasse consectetur aliquet nunc. rhoncus habitasse consectetur aliquet nunc.</p>
                    </Col>
                    <Col sm={1} className=' text-center p-0'>
                        <i className=" w-25 fa-regular fa-circle-user fa-2xl"></i>
                    </Col>
                    <Col sm={11} className='p-0'>
                        <h5>Matthew Taylor</h5>
                        <p>rhoncus habitasse consectetur aliquet nunc. rhoncus habitasse consectetur aliquet nunc. rhoncus habitasse consectetur aliquet nunc.</p>
                    </Col>

                </Row>
                <h5 className=' mt-4 fw-normal'>Write Comment</h5>
                <div className='hr'></div>
                <Row className='d-flex align-items-center mt-4'>
                    <Col sm={1} className=' text-center p-0'>
                        <i className=" w-25 fa-regular fa-circle-user fa-2xl"></i>
                    </Col>

                    <Col className='p-0'>
                        <form action="" className='row'>
                            <div className='col-10'>
                            <input type="text" className=" form-control" id="inputPassword2" />
                            </div>
                            <div className=' col-2'>
                            <button type="submit" className=" btn-submit btn px-5">post</button>

                            </div>
                        </form>
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default BlogDetails
