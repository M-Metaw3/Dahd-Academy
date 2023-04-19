require('../db/connectionDB')
const path=require('path')
const cors=require('cors')
const express=require('express')
const app=express()
app.use(cors())
app.use(express.json({limit:'200mb'}))
app.use(express.urlencoded({extended:true,limit:'200mb'}))
const userRout = require('../routing/usersRouting')
const videoRout = require('../routing/addVideoRouting')
const courseRout = require('../routing/addCourseRouting')
const conatctRout = require('../routing/contactRout')
const blogRout = require('../routing/blogandCommentRouting')





app.use(express.static(path.join(__dirname,"../images")))

app.use('/userRegistration',userRout)
app.use('/blog',blogRout)

app.use('/video',videoRout)
app.use('/course',courseRout)
app.use('/contact',conatctRout)




module.exports=app
