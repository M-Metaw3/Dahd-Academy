const teacherstate = {
    teachers:[]
}

export default (state = teacherstate,action) => {
  
switch (action.type) {
    case "getAllTeacher":
        
  return{...state, teachers:state.in+100}
        
        break;

    default:
        return state;
        break;
}


}