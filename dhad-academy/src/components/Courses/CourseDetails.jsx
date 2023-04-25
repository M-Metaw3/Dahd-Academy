import React from 'react'
import { useParams } from 'react-router-dom';

function CourseDetails() {
    const {name}=useParams();
   
        console.log(name);
        console.log("fffffffff")
   
  return (
    <div>
      CourseDetails
    </div>
  )
}

export default CourseDetails
