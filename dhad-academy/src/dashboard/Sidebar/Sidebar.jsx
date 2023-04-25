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
            <div className='d-flex'>
                <CDBSidebar className='sidebar position-sticky top-0 vh-100 '>
                    <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
                        <Container className=' d-flex align-items-center'>
                        <img width="80%" src={require("../../assets/images/logo.png")} alt="logo" />
                        </Container>
                    </CDBSidebarHeader>

                    <CDBSidebarContent>
                        <CDBSidebarMenu>
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
                            <NavLink exact="true" to="/Blogs" activeclassname="activeClicked">
                                <CDBSidebarMenuItem icon="fa-solid fa-book">
                                    Blogs
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="/admin/contacts" activeclassname="activeClicked"
                            >
                                <CDBSidebarMenuItem
                                    className='active-item'
                                    icon="fa-regular fa-envelope" >
                                    Contact
                                </CDBSidebarMenuItem>
                                </NavLink>
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter className=' text-center '>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Logout
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>

                <div className=' w-70 px-4 overflow-scroll'>
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Sidebar
