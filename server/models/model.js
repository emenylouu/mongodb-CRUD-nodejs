//get access to mongoose
const mongoose = require('mongoose');


//create the schema
var userSchema = new mongoose.Schema({
        username : {
            type: 'string',
            required: true
        },

        name : {
            type: String,
            required: true,
           
        },
        birthday : Date,
   
})
module.exports = mongoose.model('customers',userSchema)