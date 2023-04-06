import React from 'react'

function Instructor(props) {
  return (
    <div className='py-5'>
      <img className='rounded' src={props.img} alt={props.name}  width={"100%"}/>
      <h4>{props.name}</h4>
      <p>{props.position}</p>
    </div>
  )
}

export default Instructor
