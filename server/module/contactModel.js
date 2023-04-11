const mongoose = require('mongoose')
const joi = require('joi')


const contact = mongoose.Schema({
    name: {
        type:String,
        required:[true,"enter your name please"],
        trim: true,
        minLength:3,
        maxLength:100,
        lowercase: true

        
    },
    phonenumber: {
        type: String,
        required:[true,"the phonenumber is required field"],
        trim: true,
        minLength:11,
        maxLength:15,
        lowercase: true
    },
    subject: {
        type: String,
        trim: true,
        minLength:30,
        maxLength:500,
        required: [true, 'the subject is required field']
    },
    message: {
        type: String,
        trim: true,
        minLength:30,
        maxLength:500,
        required: [true, 'the message is required field']
    },

},{timestamps:true})


function validatecontact(obj){

const schema = joi.object({
name : joi.string().trim().min(3).max(200).required(),
subject : joi.string().trim().min(30).max(500).required(),
message : joi.string().trim().min(30).max(500).required(),
phonenumber :joi.string().trim().min(11).required(),

});
return schema.validate(obj);

}

const contactModel = mongoose.model('contactModel', contact)
module.exports = {contactModel,validatecontact}