import React from 'react'
import { useParams } from 'react-router-dom';
import CommonSection from '../Common-section/CommonSection';
import courses from "../../assets/images/course details.png"
import { Container } from 'react-bootstrap';

function CourseDetails() {
    const {name}=useParams();
   
  return (
    <>
       <CommonSection title={name} img={`${courses}`} />
       <Container className='py-5'>
        <h3>Lesson 1</h3>
        <div className="hr w-100"></div>
        <p>video</p>
        <p>pdf</p>
        <p>Google Meet</p>
        <br />
        <h3>Lesson 2</h3>
        <div className="hr w-100"></div>
        <p>video</p>
        <p>pdf</p>
        <p>Google Meet</p>
       </Container>
    </>
  )
}

export default CourseDetails
