require('../db/connectionDB')
const path=require('path')
const cors=require('cors')
const express=require('express')
const app=express()
app.use(cors())
app.use(express.static(path.join(__dirname,'../statics')))
app.use(express.json({limit:'200mb'}))
app.use(express.urlencoded({extended:true,limit:'200mb'}))











module.exports=app
