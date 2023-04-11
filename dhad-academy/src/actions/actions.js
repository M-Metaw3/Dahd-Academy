import * as api from "../api/api"


const getALLcontact = ()=>async(dispatch)=>{

    console.log(console.log("home"))
    await api.Loggin(body).then((element)=>element.json().then((data)=>{
    //   const {body} = data
    //   const {message} = data
    // console.log(body.getContact)
    //   console.log(body)
      if(body.getContact){
    
        dispatch({type:'getAllTeacher',payload:body.getContact})
      }
      else{
        // console.log(message   )
      }
      
    })).catch((er)=>console.log(er))
    
    }
export default {getALLcontact};
