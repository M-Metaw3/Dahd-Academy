import React from 'react'
function Instructor(props) {
  return (
    <div className='py-3 py-lg-5 d-flex flex-column mx-3 mx-md-5'>
      <img className='rounded-4 ' src={props.img} alt={props.name}  width={"100%"}/>
      <h4 className='' >{props.name}</h4>
      <p>{props.position}</p>
    </div>
  )
}

export default Instructor
