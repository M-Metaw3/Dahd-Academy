const router=require('express').Router()
const contact = require('../controller/contactController')





router.get('/',contact.getContactMessages)
router.post('/sendMessage',contact.contactMessages)
router.delete('/deleteMessage/:id',contact.DeleteContactMessages)



module.exports=router




















