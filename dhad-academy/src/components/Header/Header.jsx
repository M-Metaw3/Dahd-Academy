import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './header.css';



function Header() {
  return (
    <>
    <Navbar expand={'xl'} className="header">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={require("../../assets/images/logo.png")}
            height="45"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} className='toggle-btn' />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
          placement="end"
        >
          <Offcanvas.Header closeButton className=' justify-content-end'>
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
              <NavDropdown
                title="Courses"
                id={`offcanvasNavbarDropdown-expand-xl`}
              >
                <NavDropdown.Item as={NavLink} to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>course1</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>course2</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>course3</NavDropdown.Item>
              </NavDropdown>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Services
              </NavLink>
              <NavLink
                to="/teachers"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Teachers
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Contact
                </NavLink>

            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  </>  )
}

export default Header;
