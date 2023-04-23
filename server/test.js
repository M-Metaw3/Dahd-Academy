// router.get('/',(req,res) => {
//     try {
  
  
//       fs.unlink(path.join(__dirname,'../images/startup-g3174bf914_1920.jpg'), (err => {
//         if (err) console.log(err);
//         else {
//           console.log("Deleted file: example_file.txt");
//         }
//       }));
  
  
//   } catch (error) {
//       console.log(error)
//   }
//   })


// const {phone} = require('phone');







// const express = require('express');

// const app = express();
  
// app.get('/' , (req , res) => {
//     res.send("<h1>GeeksForGeeks</h1>");
// });
  
// app.listen(4000 , () => {
//     console.log("Server running on port 4000");
// });





// const passport = require('passport');
// const cookieSession = require('cookie-session');
// require('./passport');

// app.use(cookieSession({
// 	name: 'google-auth-session',
// 	keys: ['key1', 'key2']
// }));
// app.use(passport.initialize());
// app.use(passport.session());
	

// app.get('/', (req, res) => {
// 	res.send("<button><a href='/auth'>Login With Google</a></button>")
// });

// // Auth
// app.get('/auth' , passport.authenticate('google', { scope:
// 	[ 'email', 'profile' ]
// }));

// // Auth Callback
// app.get( '/auth/callback',
// 	passport.authenticate( 'google', {
// 		successRedirect: '/auth/callback/success',
// 		failureRedirect: '/auth/callback/failure'
// }));

// // Success
// app.get('/auth/callback/success' , (req , res) => {
// 	if(!req.user)
// 		res.redirect('/auth/callback/failure');
// 	res.send("Welcome " + req.user.email);
// });

// // failure
// app.get('/auth/callback/failure' , (req , res) => {
// 	res.send("Error");
// })

// app.listen(4000 , () => {
// 	console.log("Server Running on port 4000");
// });

// console.log(phone('+2012789546'))

// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();
// app.use(cors())
// app.use(express.json({limit:'200mb'}))
// app.use(express.urlencoded({extended:true,limit:'200mb'}))
// // app.use("/",(req,res) => {
// //   console.log("mmmmmmmmmmmmmm")
// // })
// // Set storage engine for multer

// // Handle registration form submission
// // app.post('/register', (req, res) => {

  // //   upload(req, res, (err) => {
    // //     if (err) {
      // //       res.status(400).json({ message: 'Error uploading image' });
// //     } else {
// //       const { username, email, password } = req.body;
// //       const imagePath = req.file.path;
// //       // Do something with the registration data and image path
// //       res.status(200).json({ message: 'Registration successful' });
// //     }
// //   });
// // });

// app.listen(4000, () => {
//   console.log('Server listening on port 5000');
// });



// const express = require('express');
// const app = express();
// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname,'./images'));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// // Initialize multer upload
// const upload = multer({ storage: storage });



// app.post('/upload', upload.single('image'), (req, res) => {
//   res.send('File uploaded successfully!');
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// })

const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs')
const cors = require('cors');

// Set up a route to serve the video file
app.get('/video', (req, res) => {
  const videoPath ="D:\\githup\\dahd\\dhad-academy\\server\\images\\197 Section Intro.mp4"
  const range = req.headers.range;
  const videoSize = fs.statSync(videoPath).size;
  const CHUNK_SIZE = 10 ** 6; // 1MB

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : videoSize - 1;
    const contentLength = end - start + 1;
    const headers = {
      'Content-Range': `bytes ${start}-${end}/${videoSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': contentLength,
      'Content-Type': 'video/mp4',
      'Access-Control-Allow-Origin': '*',
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
  } else {
    const headers = {
      'Content-Length': videoSize,
      'Content-Type': 'video/mp4',
      'Access-Control-Allow-Origin': 'example.com',
    };
    res.writeHead(200, headers);
    const videoStream = fs.createReadStream(videoPath);
    videoStream.pipe(res);
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});