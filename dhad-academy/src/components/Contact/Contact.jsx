import React, { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    document.title ="Contact";  
  }, []);
  return (
    <div>
      Contact
    </div>
  )
}

export default Contact
