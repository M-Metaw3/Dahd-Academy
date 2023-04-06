import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import teachers from "../../assets/images/teachers.png"

function Teachers() {
    useEffect(() => {
        document.title ="Teachers";  
      }, []);
  return (
    <div>
      <CommonSection title="INSTRUCTORS" img={`${teachers}`} />
    </div>
  )
}

export default Teachers
