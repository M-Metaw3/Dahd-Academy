import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import teachers from "../../assets/images/teachers.png"
import { Col, Container, Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';
import instructor from "../../assets/images/image 5.png"
import "./teachers.css";
function Teachers() {
    useEffect(() => {
        document.title ="Teachers";  
      }, []);
  return (
    <>
      <CommonSection title="INSTRUCTORS" img={`${teachers}`} />
      <Container className='py-5'>
        <Row xs={2} lg={3} className=''>
          <Col>
            <Instructor name="nada" img={`${instructor}`} position="Instructor" />
          </Col>
          <Col>
            <Instructor name="nada" img={`${instructor}`} position="Instructor" />
          </Col>
          <Col>
            <Instructor name="nada" img={`${instructor}`} position="Instructor" />
          </Col>
          <Col>
            <Instructor name="nada" img={`${instructor}`} position="Instructor" />
          </Col>
          <Col>
            <Instructor name="nada" img={`${instructor}`} position="Instructor" />
          </Col>
          <Col>
            <Instructor name="nada" img={`${instructor}`} position="Instructor" />
          </Col>
        </Row>

      </Container>
      <section className='be-instructor position-relative d-flex justify-content-between align-items-center py-5 overflow-hidden'>
        <div className="circle  rounded-circle position-absolute top-50 start-100 translate-middle">
        </div>
        <div className="circle circle2 rounded-circle position-absolute translate-middle">
        </div>
        <Container className='d-flex justify-content-between align-items-center'>
        <div>
        <h2 className='white fs-1 fw-bold'>Be part of us</h2>
        <p className='white fs-5 fw-bold'>Become a Instructor</p>
        </div>
        <button className='btn btn-apply '> Apply</button>
        </Container>
        
      </section>
      
    </>
  )
}

export default Teachers
