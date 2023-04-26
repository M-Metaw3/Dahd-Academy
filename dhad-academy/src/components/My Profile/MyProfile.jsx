import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Login from './login/Login'
import Register from './Register/Register'

function MyProfile() {
  return (
    <>
    <Container>
            <Row sm={1} lg={2} className=' d-flex align-items-center'> 
            <Col> 
                <Login/>
            </Col>
            <Col className='bord' >
                <Register />    
            </Col>
            </Row>
            </Container>
      
    </>
  )
}
export default MyProfile
