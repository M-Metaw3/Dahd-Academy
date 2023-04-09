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
      <section className='be-instructor text-center py-5'>
        <h3 className='pb-3'>Become a Instructor</h3>
        <button className='btn btn-apply px-5'> Apply</button>
      </section>
    </>
  )
}

export default Teachers
