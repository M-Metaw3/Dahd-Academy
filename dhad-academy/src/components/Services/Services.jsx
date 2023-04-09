import React, { useEffect } from 'react'
import CommonSection from '../Common-section/CommonSection';
import services from "../../assets/images/services.png"
import { Container } from 'react-bootstrap';

function Services() {
  useEffect(() => {
    document.title ="Services";  
  }, []);
  return (
    <div>
      <CommonSection title="services" img={`${services}`} />
      <Container className='py-5'>
      </Container>
    </div>
  )
}

export default Services
