const express = require('express');
const app = express()
const port = 4000
const cors = require ('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { text } = require('express');
const path = require('path');

//generate cors
app.use(cors())
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//generate express
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// to parse application of x-www-formurlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// to parse application of json
app.use(bodyParser.json())

//Connect to the mongdb server by using mongoose connectionString
const ConnectionString = 'mongodb+srv://tsznokleung:30624700@cluster0.nwimy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(ConnectionString, {useNewUrlParser: true});

//Generate New Schema
const Schema = mongoose.Schema;

var scheduleSchema = new Schema({
    number:String,
    text:String,
    room:String,
    start_date:String,
    end_date:String,
});

//set up the Scheldule Schema to generate data
var ScheduleModel = mongoose.model("schedule", scheduleSchema);


app.get('/api/schedules', (req, res)=>{

    const myschedules = [
    
     { 
        "number":"1", 
        "text":"Meeting", 
        "room":"564",
        "start_date":"2019-04-11 14:00",
         "end_date":"2019-04-11 17:00"
     },
     {
         "number":"2", 
         "text":"Conference", 
         "room":"370",
    
        "start_date":"2019-04-15 12:00",
         "end_date":"2019-04-18 19:00"
     },
     {
         "number":"3", 
         "text":"Interview", 
         "room":"888",
         "start_date":"2019-04-24 09:00", 
         "end_date":"2019-04-24 10:00"
     }];

ScheduleModel.find((err, data)=>{
        res.json(data);
    })
//generate to update data
    app.put('/api/schedules/:id', (req, res)=>{
        console.log("Update Schdule: " + req.params.id);
        console.log(req.body);

        ScheduleModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
            (err,data)=>{
                res.send(data);
            })
    })
//generate to delete data
app.delete('/api/schedule/:id',(req,res)=>{
    console.log("Delete Schedule: " + req.params.id);

    ScheduleModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

    //res.status(200).json({
        //message: "Looks fine",
        //schedules:myschedules});
})
//generate to get and show the data
app.get('/api/schedules/:id', (req,res)=>{
    console.log(req.params.id);

    ScheduleModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

//generate to create and submit the data
app.post('/api/schedules', (req, res)=>{
    console.log('Schedule has been set up!');
    console.log(req.body.number);
    console.log(req.body.text);
    console.log(req.body.room);
    console.log(req.body.start_date);
    console.log(req.body.end_date);  

    ScheduleModel.create({
        number:req.body.number,
        text:req.body.text,
        room:req.body.room,
        start_date:req.body.start_date,
        end_date:req.body.end_date
    })

    res.send('Schedule Added');
})
//generate get request and response
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})
//use port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})