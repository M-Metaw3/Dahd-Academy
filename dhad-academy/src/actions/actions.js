import * as api from "../api/api"


const getALLcontact = ()=>async(dispatch)=>{

    // console.log("home")
    await api.getcontact().then((element)=>element.json().then((data)=>{
      const {body} = data
    //   const {message} = data
    // console.log(body.getContact)
      console.log(body)
      if(body.getContact){
    
        dispatch({type:'getAllTeacher',payload:body.getContact})
      }
      else{
        // console.log(message   )
      }
      
    })).catch((er)=>console.log(er))
    
    }




    const registrationaction = (body)=>async(dispatch)=>{

      console.log(body)
      try {
        
        await api.registration(body) .then((response) => response.json())
     .then((data) => {
       console.log(data);
     })
      } catch (error) {
        
      }
        // const {body} = data

        // if(body.getContact){
      
        //   dispatch({type:'getAllTeacher',payload:body.getContact})
        // }
        // else{
        //   // console.log(message   )
        // }
        
      
      }


      
    const loginaction = (body)=>async(dispatch)=>{

    
      try {
        
        await api.loginapi(body) .then((response) => response.json())
     .then((data) => {
       console.log(data);
     })
      } catch (error) {
        
      }
        // const {body} = data

        // if(body.getContact){
      
        //   dispatch({type:'getAllTeacher',payload:body.getContact})
        // }
        // else{
        //   // console.log(message   )
        // }
        
      
      }









      const addblogAction = (body)=>async(dispatch)=>{

        console.log(body)
        try {
          
          await api.addblogapi(body) .then((response) => response.json())
       .then((data) => {
         
   
console.log(data)
        if(data.body){
          dispatch({type:'add blod successefully',payload:data})
        }
        if(data.error)
        dispatch({type:'error' ,payload:data.error})
       }).catch((error)=>  dispatch({type:'error' ,payload:error.message}))
        } catch (error) {
          
        }
   
        }













        const getallblogs = ()=>async(dispatch)=>{

        
          try {
            
            await api.getallplogs() .then((response) => response.json())
         .then((data) => {
           
     

          if(data.body){
            dispatch({type:'getallblogs',payload:data.body})
          }
          if(data.error)
          dispatch({type:'error' ,payload:data.error})
         }).catch((error)=>  dispatch({type:'error' ,payload:error.message}))
          } catch (error) {
            
          }
     
          }
  



export default {getALLcontact,registrationaction,loginaction,addblogAction,getallblogs};
