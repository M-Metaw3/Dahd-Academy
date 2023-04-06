import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import teachers from "../../assets/images/teachers.png"
import { Col, Container, Row } from 'react-bootstrap';
import Instructor from '../Instructor/Instructor';
import instructor from "../../assets/images/image 5.png"

function Teachers() {
    useEffect(() => {
        document.title ="Teachers";  
      }, []);
  return (
    <>
      <CommonSection title="INSTRUCTORS" img={`${teachers}`} />
      <Container>
        <Row>
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
    </>
  )
}

export default Teachers
