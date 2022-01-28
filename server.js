// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();
// Connecting to the database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

