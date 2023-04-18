const mongoose = require('mongoose')
const validator = require('validator')
const joi = require('joi')
var jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({

    // usernam:{
    //     type:String,

    // }
    usernam: {
        type:String,
        required:[true,"enter your name please"],
        trim: true,
        minLength:3,
        maxLength:50
        
    },
    email: {
        type: String,
        required:[true,"the email is required field"],
        validate:
            [
                validator.default.isEmail, "email not valid"
            ],
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'the password is required field']
    },
    image: {
        type: String,
        trim: true,
      
    },
    isAdmin:{
        type:String,
        enum:["Admin","instructor","user"],
        default:"user"
    },
  
    blocked:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

userSchema.methods.generateAuthToken = function(){

   return jwt.sign({id:this._id,name:this.name,admin:this.isAdmin,email:this.email,image:this.image},process.env.TOKEN,{expiresIn:"1d"})

}
function validateRegistration (obj){

const schema = joi.object({
name : joi.string().trim().min(3).max(50).required(),
email :joi.string().trim().min(3).max(50).required().email(),
password :joi.string().trim().min(5).max(50).required(),
// image :joi.string().trim().required(),

});
return schema.validate(obj);

}

function validateLogin (obj){

    const schema = joi.object({
  
    email :joi.string().trim().min(3).max(50).required().email(),
    password :joi.string().trim().min(5).max(50).required(),
    // image :joi.string().trim().required(),
    
    });
    return schema.validate(obj);
    
    }







const User = mongoose.model('User', userSchema)
module.exports = {User, validateRegistration,validateLogin}
// 