const mongoose = require('mongoose');
var schema = new mongoose.Schema({
        username : {
            type: 'string',
            required: true
        },

        name : {
            type: String,
            required: true,
            unique: true
        },
        birthday : Date,
   
})
const Userdb = mongoose.model('User', schema);
module.exports = Userdb;