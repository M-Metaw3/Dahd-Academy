var jwt = require('jsonwebtoken');
const response= require('../utils/response')

const isUser = (req,res,next) => {

    const authtoken = req.headers.authorization;
console.log(authtoken)
if(!authtoken){
return    response(res,401,"not authorized","please loggin");
}
const token = authtoken.split(' ')[1];

try {
const verifytoken = jwt.verify(token,process.env.TOKEN)
req.user=verifytoken;
if (req.user.blocked) {
return    response(res,401,"you are blocked ");
    
}
next()

    
} catch (error) {
return    response(res,401,"invalid token","please loggin",error);
    
}



  
}


const isAdmin = (req,res,next) => {

    isUser(req,res,() => {
      if(req.user.isAdmin=="Admin"){
        next()
      }else{
        response(res,403,"only admin can access this")
      }
    })



  
}



module.exports={isUser}