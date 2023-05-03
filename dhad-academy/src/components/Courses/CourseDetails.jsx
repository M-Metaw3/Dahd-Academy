import React from 'react'
import { useParams } from 'react-router-dom';
import CommonSection from '../Common-section/CommonSection';
import courses from "../../assets/images/course details.png"
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
function CourseDetails() {
  const lessons  = useSelector((state) => state.teacher)
  const dispatch = useDispatch()
    const {name}=useParams();
   console.log(lessons.lessons);
  return (
    <>
       <CommonSection title={name} img={`${courses}`} />
        {lessons && (lessons.lessons&&lessons.lessons.lessons)?lessons.lessons.lessons.map((el,i)=>(
       <Container className='py-5'>
       
     <h3>Lesson {i+1} </h3>
     <div className="hr w-100">Lesson</div>
     <p>video</p>
     <a href={el.video} target="_blank" rel="noopener noreferrer">video</a>
     <p>pdf</p>
     <a href={`http://localhost:5000/${el.pdf}`} target="_blank" rel="noopener noreferrer">pdf</a>

     <p>Google Meet</p>
     <a href={el.meeting} target="_blank" rel="noopener noreferrer">Google Meet</a>

     <br />
    
     </Container>
     )):""}
     </>

        )}
        

export default CourseDetails;