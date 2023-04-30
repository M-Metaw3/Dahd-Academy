const coursemodel= require('../module/addCourseModel')
const videomodel= require('../module/addVideosModel')
const fs = require('fs')
const path =require('path')

const response= require('../utils/response')



class admainController {


static addCourse =async (req,res) => {



    try {
        const { error } = coursemodel.validateaddcourse(req.body);
        if (error) {
          return res.status(400).send(error.details[0].message);
        }
        const imagePath = req.file.path

        const filePath = imagePath;

const fileName = path.basename(filePath);
    
        const course = new coursemodel.addCourse({
          title: req.body.title,
          lessons: req.body.lessons || [],
          image: req.file ? fileName : '',
          courseName: req.body.courseName,
          coursesDepartment: req.body.coursesDepartment,
          price: req.body.price,
          hours: req.body.hours,
        });
    
        await course.save();
    
        res.send(course);
      } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);
      }









//     console.log("addCourse")
//     console.log(req.body)
//    const {title,description,link}=req.body
//    const {error}= coursemodel.validateaddcourse(req.body)
//    if (error) { 
//     return   response(res,400,"Invalid Data Please Enter Valide Data","",error.details[0].message)
//  }
//  if (!req.file) { 
//     return   response(res,400,'',"please uploade an image")
//  }


//  try {

//     const postCourse= await new coursemodel.addCourse({title:title,description:description,link:link,image:req.file.originalname})

//     await postCourse.save();

//     response(res,201,"course created successfully",{postCourse},"") 
//  } catch (error) {
//     response(res,400,"course created successfully","",error)
//  }

}

//////////////////////////////////////////////////////////
static getallCourse =async (req,res) => {



  const Category =req.query.coursedepartment


console.log(Category)
if (Category) {
  
  try {
      const courses = await coursemodel.addCourse.find({coursesDepartment:Category}).select({lessons:0});
      res.send(courses);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
}else{
  
  try {
    const courses = await coursemodel.addCourse.find();
    res.send(courses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }

}


    


}
///////////////////////////////////////////////////////////////////////////////////////////////
static updateCourse =async (req,res) => {



    // try {
    //     const { error } = validateaddcourse(req.body);
    //     if (error) {
    //       return res.status(400).send(error.details[0].message);
    //     }
    
    //     const course = await addCourse.findById(req.params.id);
    //     if (!course) {
    //       return res.status(404).send('Course not found');
    //     }
    
    //     course.title = req.body.title;
    //     course.lessons = req.body.lessons || course.lessons;
    //     course.image = req.file ? req.file.filename : course.image;
    //     course.courseName = req.body.courseName;
    //     course.coursesDepartment = req.body.coursesDepartment;
    //     course.price = req.body.price;
    //     course.hours = req.body.hours;
    
    //     await course.save();
    
    //     res.send(course);
    //   } catch (error) {
    //     console.error(error.message);
    //     if (error.kind === 'ObjectId') {
    //       return res.status(404).send('Course not found');
    //     }
    //     res.status(500).send('Server Error');
    //   }












  console.log("updateCourse")

const {id} = req.params
console.log(req.body)

const title = req.body.title;
const courseName = req.body.courseName;
const coursesDepartment = req.body.coursesDepartment;
const price = req.body.price;
const hours = req.body.hours;

if(req.file){
    try {
        
        const getCourse= await coursemodel.addCourse.findById({_id:id});

        console.log(getCourse.image)
       fs.unlink(path.join(__dirname,`../images/${getCourse.image}`), (err => {
            if (err) console.log(err);
            else {
                console.log("Deleted file: example_file.txt");
            }
        }));
      


        
    } catch (error) {
response(res,400,"error occured",'',error.message) 
        
    }
    const imagePath = req.file.path   
    const filePath = imagePath;
    const fileName = path.basename(filePath);
    const image =  fileName ;
    
    const updateCourse= await coursemodel.addCourse.findByIdAndUpdate(id,{title:title,lessons:lessons,image:image,courseName:courseName,coursesDepartment:coursesDepartment,price:price,hours:hours},{new:true});         
    }

try {
    const lessons = req.body.lessons;

const updateCourse= await coursemodel.addCourse.findByIdAndUpdate(id,{title:title,lessons:lessons,courseName:courseName,coursesDepartment:coursesDepartment,price:price,hours:hours},{new:true});
console.log(updateCourse)
response(res,201,"course updated successfully",{updateCourse},"") 

    
} catch (error) {
response(res,400,"error occured",'',error) 
    
}




}
///////////////////////////////////////////////////////////////////////////////////////////////////////
static deleteCourse =async (req,res) => {
console.log("deleteCourse")
    const _id = req.params.id




    

    try {
        const deletecourse = await coursemodel.addCourse.findByIdAndDelete(_id);
deletecourse.lessons.map((lesson)=>{
       fs.unlink(path.join(__dirname,`../images/${lesson.pdf }`), (err => {
        if (err) console.log(err)}));
})
       
        await   fs.unlink(path.join(__dirname,`../images/${deletecourse.image}`), (err => {
            if (err) console.log(err);
            else {
              
                return response(res,200,"course deleted successfully",{deletecourse},"") 
            }
          }));
        
    } catch (error) {
response(res,400,"error occured",error) 
        
    }
  
}
//////////////////////////////////////////////////////////////////////////////////////////

static addlesson=async (req, res) => {
    try {

        console.log("addlesson")
      const course = await coursemodel.addCourse.findById(req.params.id);
      if (!course) {
        return res.status(404).send('Course not found');
      }
  console.log(course)
      const lesson = {
        name: req.body.name,
        pdf: req.file ? req.file.filename : '',
        video: req.body.video,
        meeting: req.body.meeting,
        course_id: req.params.id,

      };
  
      course.lessons.push(lesson);
  
      await course.save();
  
      return response(res,200,"lesson added successfully",course,"") 
      
    } catch (error) {
      console.error(error.message);
      if (error.kind === 'ObjectId') {
        return res.status(404).send('Course not found');
      }
      res.status(500).send('Server Error');
    }
  }

static deletelessons =async (req, res) => {
    console.log("deletelessons")
    try {
      const course = await coursemodel.addCourse.findById(req.params.courseId);
      if (!course) {
        return res.status(404).send('Course not found');
      }
  
      const lesson = course.lessons.id(req.params.lessonId);
 

      // Convert lesson to a Mongoose document
      // Find the index of the lesson in the lessons array
      const lessonIndex = course.lessons.findIndex(lesson => lesson._id.toString() == req.params.lessonId);
   

      if (!lesson) {
        return res.status(404).send('Lesson not found');
      }
       course.lessons.splice(lessonIndex, 1);
      await course.save();
      await   fs.unlink(path.join(__dirname,`../images/${lesson.pdf}`), (err => {
        if (err) console.log(err);
        else {
          
            return response(res,200,"lessons deleted successfully",{course},"") 
        }
      }));
  
      
    } catch (error) {
      console.error(error.message);
      if (error.kind === 'ObjectId') {
        return res.status(404).send('Course or lesson not found');
      }
      res.status(500).send('Server Error');
    }
  }

static addvideo =async (req,res) => {

    console.log(req.body)
   const {title,description,video}=req.body
   const {error}= videomodel.validateAddvideo(req.body)

   if (error) { 
   return response(res,400,"Invalid Data Please Enter Valide Data","",error.details[0].message)
 }
   if (!req.file) { 
    return response(res,400,"upload video please","",error.details[0].message)
 }

 try {

    const postvideo= await new videomodel.addVideose({title:title,description:description,video:req.file.originalname})

    await postvideo.save();

    response(res,201,"video  uploaded  successfully",{postvideo},"") 
 } catch (error) {
    response(res,400,"video uploaded  ","",error)
 }

  
}

////////////////////////////////////////////////////////////////////////////////////////////////





static getallvideo = async (req, res) => {
  
    try {
      const getVideo = await videomodel.addVideose.find();
     
      
 
      const videoPath = path.join(__dirname, `../images/${getVideo[0].video}`);

  const range = req.headers.range;
  const videoSize = fs.statSync(videoPath).size;
  const CHUNK_SIZE = 10 ** 6; // 1MB

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

    } catch (error) {
      response(res, 400, "error occured", error);
    }
  };




// static getAllVideo = async (req, res) => {
//   try {
//     const getVideoPath = (videoName) => {
//       return path.join(__dirname, `../images/${videoName}`);
//     };
    
//     const getRange = (rangeHeader, videoSize) => {
//       const CHUNK_SIZE = 10 ** 6; // 1MB
//       const parts = rangeHeader.replace(/bytes=/, '').split('-');
//       const start = parseInt(parts[0], 10);
//       const end = parts[1] ? parseInt(parts[1], 10) : videoSize - 1;
//       const contentLength = end - start + 1;
//       return { start, end, contentLength };
//     };
//     const getVideo = await videomodel.addVideose.find();
//     const videoPath = getVideoPath(getVideo[0].video);
//     const rangeHeader = req.headers.range;
//     const videoSize = fs.statSync(videoPath).size;

//     if (rangeHeader) {
//       const { start, end, contentLength } = getRange(rangeHeader, videoSize);
//       const headers = {
//         'Content-Range': `bytes ${start}-${end}/${videoSize}`,
//         'Accept-Ranges': 'bytes',
//         'Content-Length': contentLength,
//         'Content-Type': 'video/mp4',
//         'Access-Control-Allow-Origin': '*',
//       };
//       res.writeHead(206, headers);
//       const videoStream = fs.createReadStream(videoPath, { start, end });
//       videoStream.pipe(res);
//     } else {
//       const headers = {
//         'Content-Length': videoSize,
//         'Content-Type': 'video/mp4',
//         'Access-Control-Allow-Origin': '*',
//       };
//       res.writeHead(200, headers);
//       const videoStream = fs.createReadStream(videoPath);
//       videoStream.pipe(res);
//     }
//   } catch (error) {
//     response(res, 400, "error occured", error);
//   }
// };














///////////////////////////////////////////////////////////////////////////////////
static updatevideo =async (req,res) => {

    console.log("updatevideo")
    const {id} = req.params
    const {title,description,video}=req.body

    try {


if(req.file){

try {


    const getVideo= await videomodel.addVideose.findById({_id:id});
console.log(getVideo)
    await   fs.unlink(path.join(__dirname,`../images/${getVideo.video}`), (err => {
        if (err) console.log(err);
        else {
          console.log("Deleted video: video");
        }
      }));







    
} catch (error) {
    
}









}








     
    const updateVideo= await videomodel.addVideose.findByIdAndUpdate(id,{title:title,description:description,video:req.file.originalname},{new:true});




        


    response(res,201,"video updated successfully",{updateVideo},"") 
    
        
    } catch (error) {
    response(res,400,"error occured",error) 
        
    }

  
}

static deletevideo =async (req,res) => {



    console.log("deletevideo")
    const _id = req.params.id

    try {
        const deleteVideo = await videomodel.addVideose.findByIdAndDelete(_id);
        await   fs.unlink(path.join(__dirname,`../images/${deleteVideo.video}`), (err => {
            if (err) console.log(err);
            else {
                console.log("Deleted file: example_file.txt");
            }
        }));
        
        response(res,200,"video deleted successfully",{deleteVideo},"") 
    } catch (error) {
response(res,400,"error occured",error) 
        
    }
  
}


    }




module.exports=admainController