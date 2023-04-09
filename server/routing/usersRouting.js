const router=require('express').Router()
const users = require('../controller/registrationController')





router.post('/',users.userRegistration)
router.post('/login',users.userLogin)














module.exports=router
