const blogs = {
    blogs:"",
    error:'',
}

export default (state = blogs,action) => {
  
switch (action.type) {

    case 'wait for upload':
        console.log("wait for upload")
  return{ blogs:"please wait to complete create"}
    case 'add blod successefully':
        console.log("redux")
  return{ blogs:action.payload}
  case 'error':
    console.log("error")
return{ blogs:action.payload}
        break;

    default:
        return state;
        break;
}


}