import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import services from "../../assets/images/services.png"

function Services() {
  useEffect(() => {
    document.title ="Services";  
  }, []);
  return (
    <div>
      <CommonSection title="services" img={`${services}`} />
    </div>
  )
}

export default Services
