const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())
//specify which domains can make requests and which methods are allowed
app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
//serve incoming post requests to /students
app.post('/contactdetails', (req, res, next) => {
    const vennela = req.body;
    console.log(vennela.contactName);
    //sent an acknowledgment back to caller 
    res.status(201).json('Post successful');
});

//in the app.get() method below we add a path for the students API 
//by adding /students, we tell the server that this method will be called every time http://localhost:8000/students is requested. 
app.get('/contactDetails', (req, res, next) => {
    //we will add an array named students to pretend that we received this data from the database
    const contactDetails = [
   
    { 
        "contactName" : "Vennela1", 
        "contactJobTitle" : "Student" , 
        "contactEmail" : "Vbalina@gmail.com",
        "contactPhone" : "888757611",
        "contactAddress":{
            "street" : "01023", 
            "zip" : "30005" , 
            "city" : "alpharetta",
            "state" : "GA"
        },
        "contactProjectTitle":"Capstone",
        "contactDescProject":"Capstone Decription",
        "contactTechSkills":"CSS",
        
        
     },
     { 
        "contactName" : "Vennela2", 
        "contactJobTitle" : "Student" , 
        "contactEmail" : "Vbalina@gmail.com",
        "contactPhone" : "888757611",
        "contactAddress":{
            "street" : "01023", 
            "zip" : "30005" , 
            "city" : "alpharetta",
            "state" : "GA"
        },
        "contactProjectTitle":"Capstone",
        "contactDescProject":"Capstone Decription",
        "contactTechSkills":"CSS",
        
        
     },
     { 
        "contactName" : "Vennela3", 
        "contactJobTitle" : "Student" , 
        "contactEmail" : "Vbalina@gmail.com",
        "contactPhone" : "888757611",
        "contactAddress":{
            "street" : "01023", 
            "zip" : "30005" , 
            "city" : "alpharetta",
            "state" : "GA"
        },
        "contactProjectTitle":"Capstone",
        "contactDescProject":"Capstone Decription",
        "contactTechSkills":"CSS",
        
        
     },
     
    ];
    //send the array as the response 
    res.json(contactDetails);

});

//to use this middleware in other parts of the application
module.exports=app;
         