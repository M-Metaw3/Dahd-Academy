require('dotenv').config()
const app=require('./utils/src')
console.log("done")
const port=process.env.PORT||8000

app.listen(port,()=>{
    console.log('now we listen to port aaaaaaa:'+port)
})