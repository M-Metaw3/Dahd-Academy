import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import "./sidebar.css"
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarFooter,
    CDBIcon,
} from 'cdbreact';
import { Container } from 'react-bootstrap';


function Sidebar() {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <CDBSidebar textColor="black" className='sidebar vh-100'>
                    <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
                        <Container className=' d-flex align-items-center'>
                        <img className='' width="80%" src={require("../../assets/images/logo.png")} alt="logo" />
                        </Container>
                    </CDBSidebarHeader>

                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                       
                        <NavLink exact="true" to="admin/addvideo" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon={"fa-solid fa-user"}>
                                    Add video
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="admin/instructors" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon={"fa-solid fa-user"}>
                                  instructor
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="/Instractors" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon={"fa-solid fa-user"}>
                                    Instractors
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="/Courses" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-book">
                                    Courses
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="addCourses" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-book">
                                add    Courses
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="Blogs" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-book">
                                    Blogs
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="admin/allcourses" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-book">
                                    allcourses
                                </CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink exact="true" to="contacts" activeclassname="activeClicked"
                            >
                                <CDBSidebarMenuItem
                                    className='active-item'
                                    icon="fa-regular fa-envelope" >
                                    Contact
                                </CDBSidebarMenuItem>
                                </NavLink>

                                <NavLink exact="true" to="/login" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-book">
                                    Login
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="/register" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-book">
                                Register
                                </CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Logout
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>

                <div style={{ overflow: 'scroll initial' }} className='p-5 vh-100'>
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Sidebar
