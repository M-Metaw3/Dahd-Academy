const teacherstate = {
    teachers:[],
}

export default (state = teacherstate,action) => {
  
switch (action.type) {
    case "getAllTeacher":
        // console.log("redux")
  return{...state, teachers:action.payload}
        
        break;

    default:
        return state;
        break;
}


}