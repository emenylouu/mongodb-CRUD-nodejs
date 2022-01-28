// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//configuring the http server using express
const express = require('express');
// const bodyparser = require("body-parser");
// const path = require('path');

// set the port
var PORT = process.env.PORT || 8000;
const app = express();
app.get('/', (req, res)=> {
    res.send(' It worked!!');
  })

// Connecting to the database
dotenv.config();
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// parse request to body-parser
// app.use(bodyparser.urlencoded({ extended : true}))


// show results on localhost
app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)});