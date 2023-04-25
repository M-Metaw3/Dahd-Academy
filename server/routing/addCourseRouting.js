const router=require('express').Router()
const admin = require('../controller/adminaddvedioandcourseController')
const multer = require('multer')
const path =require('path')
const fs = require('fs')
const auth=require("../midleware/authentication");


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../images'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    },
}
  );
  
  var upload = multer({ storage: storage }).single('image');

router.post('/addCourse', auth.isAdmin, upload,admin.addCourse)
router.get('/getCourse',admin.getallCourse)
router.patch('/updateCourse/:id',upload,admin.updateCourse)
router.delete('/deleteCourse/:id',admin.deleteCourse)



module.exports=router
