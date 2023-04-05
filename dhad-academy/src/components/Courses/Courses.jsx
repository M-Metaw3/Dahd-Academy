import React, { useEffect } from 'react'

function Courses() {
  useEffect(() => {
    document.title ="Courses";  
  }, []);
  return (
    <div>
      Courses
    </div>
  )
}

export default Courses
