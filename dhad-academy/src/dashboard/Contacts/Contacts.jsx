import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions/actions';
import  { useEffect, useState } from 'react';
import moment from "moment"

function Contacts() {


  const dispatch = useDispatch()
  const selector2 = useSelector((state) => state.teacher.teachers)
  useEffect(() => {
      dispatch(actions.getALLcontact())
  }, [dispatch]);



console.log(selector2);



  return (
    <>
 


 <div>
      {selector2.length>0?selector2.map(post => (
        <div key={post._id}>
          <p>{moment(post.createdAt).fromNow()}</p>
          <h2>{post.name}</h2>
          <p>{post.phonenumber}</p>
          <p>subject: {post.message}</p>


          <p>message: {post.subject}</p>
        
        </div>
      )):<div>no message</div>}
    </div>
  

    




    </>
  )
}

export default Contacts
