import React, { useEffect } from 'react';
import CommonSection from '../Common-section/CommonSection';
import about from "../../assets/images/about.png"


function About() {
  useEffect(() => {
    document.title ="About";  
  }, []);
  return (
    <div>
        <CommonSection title="about" img={`${about}`} />
    </div>
  )
}

export default About
