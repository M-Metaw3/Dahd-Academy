const express=require('express')

const Response = (res,statuscode,message,body,error) => {
  return  res.status(statuscode).json({message,body,error})
 
}

module.exports= Response;
