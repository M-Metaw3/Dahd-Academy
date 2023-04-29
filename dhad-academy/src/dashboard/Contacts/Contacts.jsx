import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions/actions';
import  { useEffect, useState } from 'react';
import moment from "moment"
import { Container } from 'react-bootstrap';
import "./contact.css"
function Contacts() {


  const dispatch = useDispatch()
  const messages = useSelector((state) => state.teacher.teachers)
  useEffect(() => {
      dispatch(actions.getALLcontact())
  }, [dispatch]);


const DeleteAllContact = () => {console.log("delete all")};
const Delete = (id) => {console.log(`delete+${id}`)};

  return (
    <>
    <h3>Contacts</h3>
    <div className='py-2 '>
      <span>Total: {messages.length}</span>
     <button className="btn mx-3 btn-delete"  onClick={DeleteAllContact}>Delete All</button>

     </div>
    <Container className='py-2 w-75 contact'>
 {messages.length>0?messages.map(post => (

    <div key={post._id}  className=" card m-1 m-lg-4 ">
          <div className="card-body  align-items-center">
          <p>{moment(post.createdAt).fromNow()}</p>
          <p className=' fw-bold'>Name: <span className=' fw-normal'> {post.name} </span></p>
          <p className=' fw-bold'>Phone Number: <span className=' fw-normal'> {post.phonenumber}</span></p>
          <p className=' fw-bold'>subject:<span className=' fw-normal'> {post.message}</span></p>
          <p className=' fw-bold'>message:<span className=' fw-normal'>{post.subject}</span> </p>
          <div className=' text-center mt-3' >
          <button className="btn btn-delete" onClick={()=>Delete(post._id)}>Delete</button>
          </div>
            </div>
          </div>
             )):<div>no message</div>}
 

    </Container>

 {/* <div>
      {selector2.length>0?selector2.map(post => (
        <div key={post._id}>
          <p>{moment(post.createdAt).fromNow()}</p>
          <h2>{post.name}</h2>
          <p>{post.phonenumber}</p>
          <p>subject: {post.message}</p>


          <p>message: {post.subject}</p>
        
        </div>
      )):<div>no message</div>}
    </div> */}
  

    




    </>
  )
}

export default Contacts
