// connected to database
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://amit917480:HeS8n79pHPAeMYQo@cluster0.vrklz7k.mongodb.net/hospital_Api');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting db"));

db.once('open', function(){
    console.log("Connected to database:: Mongodb")
});

module.exports = db;