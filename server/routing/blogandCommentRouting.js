const router=require('express').Router();
const auth=require("../midleware/authentication");
const blog = require('../controller/addBlogController');
const multer = require('multer');
const path =require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'../images'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Initialize multer upload with two files
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (file.fieldname === 'image1' || file.fieldname === 'image2') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file field name'), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB
  }
}).fields([
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 }
]);

// Example route that uploads two images
router.post('/addblog',  (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(400).json({ message: 'File upload error' });
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(500).json({ message: 'Server error' });
    } else {
      // Everything went fine.
      next();
    }
  });
}, blog.postblog);

router.post('/comment/:id', blog.comment);
router.get('/', blog.getblog);

module.exports = router;
