const commentmodel= require('../module/commentModel')
const blogmodel= require('../module/addBlog')
const fs = require('fs')
const path =require('path')
const response= require('../utils/response')



class Blog {

static getblog = async(req, res) => {
    try {
 const getallblog=  await       blogmodel.addBlog.find().populate('comment')
            .sort({ createdAt: -1 })
        return    response(res,200,"get All Blogs succefully",getallblog)

      } catch (error) {
        return  response(res,400,"get All Blogs failed",'',error.message)
          
      }
      
 
  };


  static postblog = async(req, res) => {


    try {

        const {error}= blogmodel.validateaddBlog(req.body)

        if (error) { 
        return response(res,400,"Invalid Data Please Enter Valide Data","",error.details[0].message)
      }




        const {title,description,details} = req.body;
   

        const imagePath = req.file.path;

        const filePath = imagePath;

const fileName = path.basename(filePath);

             const postBlog= await new blogmodel.addBlog(
     {image:fileName,title:title,description:description,details:details }
  
             )
             
             await postBlog.save();
              return  response(res,201,"blog created successfully",{postBlog},"")

      } catch (error) {
        return  response(res,400,"get All Blogs failed",'',error.message)
          
      }
      
  };




  static deleteplog =async (req,res) => {



    console.log("deleteplog")
    const _id = req.params.id

    try {
        const deleteblog= await blogmodel.addBlog.findByIdAndDelete(_id);
        if(!deleteblog){
          return response(res,400,"blog not found to deleted") 
        }
        await   fs.unlink(path.join(__dirname,`../images/${deleteblog.image}`), (err => {
            if (err)  return response(res,400,"error occured when try to delete file","",err) ;
            else {
                
              return  response(res,200,"blog deleted successfully",{deleteVideo},"") 
            }
        }));
        
    } catch (error) {
        return response(res,400,"error occured",error) 
    }
  
}























static comment = async(req, res) => {


  try {

      const {error}= commentmodel.validateaddcomment(req.body)

      if (error) { 
      return response(res,400,"Invalid Data Please Enter Valide Data","",error.details[0].message)
    }




      const {text} = req.body;
      const {id} = req.params;

 

    
           const comment= await new commentmodel.addcomment(
   {text:text ,blogId:id,userid:"643e19fff47d4fc23774dc19",username:"metawea"}

           )
           
           await comment.save();
            return  response(res,201,"comment created successfully",{comment},"")

    } catch (error) {
      return  response(res,400,"get All Blogs failed",'',error.message)
        
    }
    
};






static deletecomment = async(req, res) => {


  try {

    
   
    const _id = req.params.id

 

    
           const comment= await new commentmodel.addcomment.findByIdAndDelete(_id)
            return  response(res,201,"comment deleted successfully",{comment},"")

    } catch (error) {
      return  response(res,400,"get All Blogs failed",'',error.message)
        
    }
    
};

    }












    

















    




module.exports=Blog