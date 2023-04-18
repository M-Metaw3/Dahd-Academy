const userModel= require('../module/userModule')
const bycrpt = require('bcrypt')
var jwt = require('jsonwebtoken');
const response= require('../utils/response')



class users {

static userRegistration =async(req,res)=>{

const {name,email,password} = req.body
const {error}= userModel.validateRegistration(req.body)
if (error) { 
     return response(res,400,"error ocured","",error.details[0].message)
   }
  

try {



  


      const {name,email,password} = req.body;
   

      const imagePath = req.file.originalname;

           const hashingPassword  =await bycrpt.hash(password,12)
           const createuser= await new userModel.User(
   {image:imagePath,usernam:req.body.name,email:email,password:hashingPassword  }

           )
           
           await createuser.save();
            return  response(res,201,"account created successfully",{createuser},"")





} catch (error) {
    response(res,400,'error has occured',"",error.message)
    
}

}
////////////////////////////////////////////////////////////////////////////////
static userLogin =async(req,res)=>{

    const {email,password} = req.body
    console.log(email)
    const {error}= userModel.validateLogin(req.body)
    if (error) { 
     return  response(res,400,"invalid Data","",error.details[0].message)
    }
    
 try {


    const emailexsite= await userModel.User.findOne({email:email})
    console.log(emailexsite)
    if (!emailexsite) { 
      return  response(res,400,"email doesnt exsited")
     }
const passwordCorrect = bycrpt.compareSync(password, emailexsite.password)

   if(passwordCorrect){


const token = emailexsite.generateAuthToken();

const {password,...other}= emailexsite._doc;
return   response(res,200,"loggin successfully",{...other,token},"")

   }
   
   return  response(res,400,"password not correct ")

    
 } catch (error) {
   return  response(res,400,"password not correct ",'',error.message)
 } 
    }
//////////////////////////////////////////////////////////////////////////////





    static uploadimage = (req,res) => {



 return response(res,200,"image uploaded")







      
      
    }
    
    }




module.exports=users