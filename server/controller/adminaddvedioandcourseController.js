const coursemodel= require('../module/addCourseModel')
const videomodel= require('../module/addVideosModel')
const fs = require('fs')
const path =require('path')

const response= require('../utils/response')



class admainController {


static addCourse =async (req,res) => {
    console.log("addCourse")
    console.log(req.body)
   const {title,description,link}=req.body
   const {error}= coursemodel.validateaddcourse(req.body)
   if (error) { 
    return   response(res,400,"Invalid Data Please Enter Valide Data","",error.details[0].message)
 }
 if (!req.file) { 
    return   response(res,400,'',"please uploade an image")
 }


 try {

    const postCourse= await new coursemodel.addCourse({title:title,description:description,link:link,image:req.file.originalname})

    await postCourse.save();

    response(res,201,"course created successfully",{postCourse},"") 
 } catch (error) {
    response(res,400,"course created successfully","",error)
 }

}

//////////////////////////////////////////////////////////
static getallCourse =async (req,res) => {
    try {
    console.log("getallCourse")

const getCourse= await coursemodel.addCourse.find();
console.log(getCourse)
response(res,200,"get all posts successfully",{getCourse},"") 

    
} catch (error) {

response(res,400,"error occured",error) 

    
}

}
///////////////////////////////////////////////////////////////////////////////////////////////
static updateCourse =async (req,res) => {
  console.log("updateCourse")

const {id} = req.params
const {title,description,link}=req.body
    if(req.file){
    try {

        const getCourse= await coursemodel.addCourse.findById({_id:id});
console.log(getCourse.image)
       fs.unlink(path.join(__dirname,`../images/startup-g3174bf914_1920.jpg`), (err => {
            if (err) console.log(err);
            else {
              console.log("Deleted file: example_file.txt");
            }
          }));


        
    } catch (error) {
response(res,400,"error occured",'',error) 
        
    }
    
             
    }

try {

 
const updateCourse= await coursemodel.addCourse.findByIdAndUpdate(id,{title:title,description:description,link:link,image:req.file.originalname},{new:true});

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
// static getallvideo =async (req,res) => {




//     console.log("getallvideo")
//     try {
    
//     const getVideo= await videomodel.addVideose.find();
// console.log(getVideo)
// // ${getVideo[0].video}
//         // const { filename } = req.params;
//         const videoPath =  path.join(__dirname,`../images/37.Node JS API _  #37 - Pagination.mp4`);
//         console.log(videoPath)

//         const videoStream = fs.createReadStream(videoPath);
//         res.setHeader('Content-Type', 'video/mp4');
//         videoStream.pipe(response);
 
    
//     response(res,200,"get all posts successfully",{getVideo},"") 
    
        
//     } catch (error) {
    
//     response(res,400,"error occured",error) 
    
        
//     }


  
// }







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
  // const videoId = getVideo[0]._id; // Get the ID of the video
  // res.setHeader('Video-ID', videoId); // Set the Video-ID header
  // res.writeHead(206, headers);
 
  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);

    } catch (error) {
      response(res, 400, "error occured", error);
    }
  };















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