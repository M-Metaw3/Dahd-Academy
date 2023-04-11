import * as api from "../api/api"


const getALLcontact = ()=>async(dispatch)=>{

    console.log(console.log("home"))
    await api.Loggin(body).then((element)=>element.json().then((data)=>{
    //   const {body} = data
    //   const {message} = data
    console.log(data)
    //   console.log(body)
    //   if(body){
    
    //     dispatch({type:'loggin',payload:data})
    //   }
    //   else{
    //     console.log(message   )
    //   }
      
    })).catch((er)=>console.log(er))
    
    }
export default {getALLcontact};
