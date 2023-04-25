const router=require('express').Router()
const users = require('../controller/registrationController')
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



router.post('/', (req, res,next) => {

  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: 'Error uploading image' });
    } else {
    next();
    }
  });
},users.userRegistration);
router.post('/login',users.userLogin)
router.put('/:id',(req, res,next) => {

  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: 'Error uploading image' });
    } else {
    next();
    }
  });
},users.updateUser);
router.get('/',users.getallusers)
router.delete('/:id', users.deleteUser);

















module.exports=router
