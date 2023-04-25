import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Modal, Row, Col } from "react-bootstrap";
import './header.css';
import Login from '../My Profile/login/Login';
import Register from '../My Profile/Register/Register';


function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <nav className=" d-none d-xl-block navbar navbar-expand top-nav px-xl-5 ">
    <div className='container-fluid '>
    <ul className="navbar-nav gap-4 ">
    <li className="fw-lighter ">
    <i className="fa-solid fa-phone"></i>
        +20 100 763 3800
    </li>
    <div className="vr"></div>
    <li className="fw-lighter ">
    <i className="fa-solid fa-envelope"></i>
    Info@dhadacademy.com      
    </li>
    </ul>
    <ul className="navbar-nav justify-content-end pe-3  gap-4">
    <li className="fw-lighter ">
    <i className="fa-solid fa-language"></i>
    Languages
    </li>
    <div className="vr"></div>

    <li className='fw-lighter' onClick={handleShow}>
    <i className="fa-regular fa-user"></i>
    My Profile
    </li>
    

    </ul>

      <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton className=' text-left border-0 bg-modal'>
        </Modal.Header>
        <Modal.Body className='bg-modal'>
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
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
  </div>
</nav>

    <Navbar expand={'xl'} className="header px-xl-5">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={require("../../assets/images/logo.png")}
            height="45"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`}  className='toggle-btn' />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
          placement="start"
        >
          <Offcanvas.Header closeButton className='justify-content-end'>
            {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                              <img
                                  src={require("../../assets/images/logo.png")}
                                  height="60"
                                  className="d-inline-block align-top"
                                  alt="logo"
                              />
                          </Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 align-items-xl-center gap-3 nav-links">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'active' : '')}

              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}

              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Services
              </NavLink>
              <NavDropdown
                title="Courses"
                id={`offcanvasNavbarDropdown-expand-xl`}
              >
                <NavDropdown.Item as={NavLink} to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>course1</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>course2</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>course3</NavDropdown.Item>
              </NavDropdown>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Blog
              </NavLink>
              <NavLink
                to="/instructors"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Instructors
              </NavLink>
             
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contacts
                </NavLink>



                <NavLink
                to="/test"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Test
                </NavLink>
                <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Admin
                </NavLink>

            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  </>  )
}

export default Header;
