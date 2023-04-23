const mongoose = require('mongoose')
const validator = require('validator')
const joi = require('joi')
var jwt = require('jsonwebtoken');

const addCourseModel = mongoose.Schema({
    title: {
        type:String,
        required:[true,"enter your name please"],
        trim: true,
        minLength:10,
        maxLength:200,
        
    },
    description: {
        type: String,
        required:[true,"the discription is required field"],
        trim: true,
        lowercase: true
    },
    link: {
        type: String,
        trim: true,
        required: [true, 'the link youtube is required field']
    },
    
    image: {
        type: String,
        trim: true,
        default:''
    },


},{timestamps:true})


function validateaddcourse (obj){

const schema = joi.object({
title : joi.string().trim().min(10).max(200).required(),
description :joi.string().trim().min(15).required(),
link :joi.string().trim().min(15).required(),
// image :joi.string().trim().required(),

});
return schema.validate(obj);

}









const addCourse = mongoose.model('addCourse', addCourseModel)
module.exports = {addCourse,validateaddcourse}