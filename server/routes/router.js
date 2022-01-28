//configuring the http server using express
const express = require('express')
const router = express.Router()
// call the schema
const customers = require('../models/model')

//GET user 
router.get('/', async (req, res)=> {
   try{
      const user_data = await customers.find()
      res.json(user_data)
   }catch(err){
      re.send('Error'+ err)
   }
})
 

module.exports = router