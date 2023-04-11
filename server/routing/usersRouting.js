const router=require('express').Router()
const users = require('../controller/registrationController')
const multer = require('multer')
const path =require('path')
const fs = require('fs')


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


router.post('/',upload,users.userRegistration)
router.post('/login',users.userLogin)
router.post('/uploade',upload,users.uploadimage)















module.exports=router
