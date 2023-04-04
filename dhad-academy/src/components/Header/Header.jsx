import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';  
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
        <Navbar bg="light" expand={'xl'} className="mb-3">
        <Container fluid>
        <Navbar.Brand href="#home">
        <img
              src={require("../../assets/images/logo.png")}
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
        <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  
                  
                  
                  <Nav.Link href="#action1"><Link to="/links">Home</Link></Nav.Link>


                  
                
                  <Nav.Link ><Link to="/links">Link  </Link></Nav.Link>
       

                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-xl`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
    </Navbar>

    </>
  )
}

export default Header;
