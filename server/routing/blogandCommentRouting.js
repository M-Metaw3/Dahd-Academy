const router=require('express').Router()
const auth=require("../midleware/authentication")

const blog = require('../controller/addBlogController')

const multer = require('multer')
const path =require('path')
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize multer upload
const upload = multer({
  storage: storage
}).single('image');



// router.get('/',contact.getContactMessages)
router.post('/addblog',(req, res,next) => {

    upload(req, res, (err) => {
      if (err) {
        res.status(400).json({ message: 'Error uploading image' });
      } else {
      next();
      }
    });
  },blog.postblog)


  
router.post('/comment/:id',blog.comment)
router.get('/',blog.getblog)




module.exports=router




















