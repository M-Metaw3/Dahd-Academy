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
import RoutesDashboard from '../Routes/RoutesDashboard';

function Sidebar() {
    return (

<>
            <div className='d-flex'>
                <CDBSidebar className='sidebar position-sticky top-0 vh-100 '>
                    <CDBSidebarHeader prefix={<CDBIcon icon="bars" size="lg" />}>
                        {/* <Container className=' d-flex align-items-center'>
                        <img width="80%" src={require("../../assets/images/logo.png")} alt="logo" />
                        </Container> */}
                    </CDBSidebarHeader>

                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                       
                        <NavLink exact="true" to="admin/addvideo" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon={"fa-solid fa-user"}>
                                    Add video
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="admin/instructors" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon={"fa-solid fa-user"}>
                                  Users
                                </CDBSidebarMenuItem>
                            </NavLink>
                           
                            <NavLink exact="true" to="admin/enrolled" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon="fa-solid fa-book">
                                 enrolled
                                </CDBSidebarMenuItem>
                            </NavLink>
                           
                            <NavLink exact="true" to="addCourses" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon="fa-solid fa-book">
                                add Courses
                                </CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact="true" to="Blogs" activeclassname="activeClicked">
                                <CDBSidebarMenuItem className='active-item' icon="fa-solid fa-book">
                                    Blogs
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
                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter className=' text-center '>
                        <div className=' px-2 py-3'>
                            Logout
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>

                <div className='w-100 p-4 overflow-scroll'>
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Sidebar
