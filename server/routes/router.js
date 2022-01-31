//configuring the http server using express
const express = require('express')
const router = express.Router()

// call the schema
const Customers = require('../models/model')

//GET customers
router.get('/', async (req, res)=> {
   try{
      const users = await Customers.find()
      res.json(users)
   }catch(err){
      re.send('Error'+ err)
   }
})
 
//GET customers by id
router.get('/:id', async(req,res) => {
   try{
          const user_data = await Customers.findById(req.params.id)
          res.json(user_data)
   }catch(err){
       res.send('Error ' + err)
   }
})
module.exports = router