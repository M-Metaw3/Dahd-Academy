import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import contact from "../../assets/images/contact.png"

function Contact() {
  useEffect(() => {
    document.title ="Contact";  
  }, []);
  return (
    <>
      <CommonSection title="CONTACT US" img={`${contact}`} />
    </>
  )
}

export default Contact
