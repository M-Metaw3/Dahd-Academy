import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Modal, Row, Col } from "react-bootstrap";
import './header.css';
import Login from '../My Profile/login/Login';
import Register from '../My Profile/Register/Register';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import i18n from 'i18next';
// import i18next from 'i18next';

function Header() {
  const [show, setShow] = useState(false);
  const users = JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null
  const nav = useNavigate()
  const hadelerLogout = () => {
    console.log("object");
    localStorage.removeItem("token")
    nav('/')
  }
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(true)
  }

  const CloseOffcanvas = () => setMenuOpen(false)
  const [t, i18n] = useTranslation();
  // const [lang, setLang] = useState("en");
  // const changLang = () => {

  // }


  return (
    <>
      <nav className=" d-none d-xl-block navbar navbar-expand top-nav px-xl-5 ">
        <div className='container-fluid '>
          <ul className="navbar-nav gap-4 ">
            <li className="fw-lighter ltr">
              <i className="fa-solid fa-phone"></i>
              +20 100 763 3800
            </li>
            <div className="vr"></div>
            <li className="fw-lighter ltr">
              <i className="fa-solid fa-envelope"></i>
              Info@dhadacademy.com
            </li>
          </ul>

          <ul className="navbar-nav justify-content-end pe-3  gap-4">
            
            <li className='dropdown ' >
              <button className="fw-lighter fs-5 dropdown-toggle btn py-0 border-0"  id="DropdownMenu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-language"></i>                
                {t('Languages')}
              </button>
              <ul className="dropdown-menu" aria-labelledby="DropdownMenu">
                <li
                   className={ `dropdown-item`}
                  onClick={() => {
                    i18n.changeLanguage('ar');
                  }}
                  >
                  Arabic
                </li>
                <li
                   className={ `dropdown-item`}
                    onClick={() => {
                      i18n.changeLanguage('en');
                    }}
                    >                    
                      English
                </li>
              </ul>
            </li>
            <div className="vr"></div>
            
            {/* <li className='fw-lighter' onClick={handleShow}> */}
            {!users ? <li className='fw-lighter'>
              <NavLink to={"/myprofile"} className=" text-decoration-none">
                <i className="fa-regular fa-user"></i>
                {t('MyProfile')}
              </NavLink>
            </li> :
              <li onClick={hadelerLogout} className='fw-lighter'>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>                
                {t('Logout')}
              </li>}

          </ul>


          {/* <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton className=' text-left border-0 bg-modal'>
        </Modal.Header>
        <Modal.Body className='bg-modal'>
        <Container>
            <Row sm={1} lg={2} className=' d-flex align-items-center'> 
            <Col> 
                <Login handleClose={handleClose}/>
            </Col>
            <Col className='bord' >
                <Register />    
            </Col>
            </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
        </div>
      </nav>

      <Navbar expand={'xl'} className="header px-xl-5"  >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={require("../../assets/images/logo.png")}
              height="45"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} onClick={toggleMenu}
            aria-labelledby="offcanvasNavbarLabel" className='toggle-btn' />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="start"
            restoreFocus={false}
            show={menuOpen}
            onHide={CloseOffcanvas}
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
                  onClick={CloseOffcanvas}
                >
                  {t('Home')}

                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={CloseOffcanvas}
                >
                  {t('About')}
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={CloseOffcanvas}
                >
                  {t('Services')}
                </NavLink>
                {users?   <NavLink
                  to="/mylearning"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={CloseOffcanvas}
                >
                 Mylearning
                </NavLink>:""}
                <div className='dropdown '>
              <button className=" fs-5 dropdown-toggle btn px-0 border-0"  id="DropdownMenu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {t('Courses')}
              </button>
              <ul className="dropdown-menu" aria-labelledby="DropdownMenu">
                 <li> <NavLink className="dropdown-item" to="/courses/Arabic" onClick={CloseOffcanvas} >Arabic</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Quran and readings" onClick={CloseOffcanvas} >Quran and readings</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Islamic studies" onClick={CloseOffcanvas} >Islamic studies</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Qualifying courses" onClick={CloseOffcanvas} >Qualifying courses</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Crafts and Skills" onClick={CloseOffcanvas} >Crafts and Skills</NavLink></li>
                 <li> <NavLink className="dropdown-item" to="/courses/Field tourism" onClick={CloseOffcanvas} >Field tourism</NavLink></li>
               
              
              </ul>
                </div>
                
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={CloseOffcanvas}
                >
              {t('Blog')}
                </NavLink>
                <NavLink
                  to="/instructors"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={CloseOffcanvas}
                >
                  {t('Instructors')}
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={CloseOffcanvas}
                >
                  {t('contacts')}
                  </NavLink>


                <NavLink
                  to="/test"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={CloseOffcanvas}
                >
                  Test
                </NavLink>
                {users && users.isAdmin == 'Admin' ? <NavLink
                  to="/admin"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={CloseOffcanvas}
                >
                {t('Admin')}
                </NavLink> : ''}
                <div className='d-xl-none d-block'>
                <div className="hr w-50"></div>
            <p>
              <i className="fa-solid fa-phone"></i>
              +20 100 763 3800
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>
              Info@dhadacademy.com
            </p>

            <p className='dropdown ' >
              <button className=" fs-5 fw-light dropdown-toggle btn p-0 border-0"  id="DropdownMenu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-language"></i>
                Languages
              </button>
              <ul className="dropdown-menu" aria-labelledby="DropdownMenu">
                <li>
                  <NavLink className={({ isActive }) => `dropdown-item ${isActive} ? 'active' : ''`}>Arabic</NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => `dropdown-item ${isActive} ? 'active' : ''`}>English</NavLink>

                </li>
              </ul>
            </p>
            
            {/* <li className='fw-lighter' onClick={handleShow}> */}
            {!users ? <p>
              <NavLink to={"/myprofile"} className=" text-decoration-none">
                <i className="fa-regular fa-user"></i>
                My Profile
              </NavLink>
            </p> :
              <p onClick={hadelerLogout} >
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                Logout
              </p>}

        </div>

              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>)
}

export default Header;
