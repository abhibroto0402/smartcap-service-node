var express = require('express');
var app = express();
var port =8080;// process.env.PORT;
var bodyParser = require('body-parser');
var patient_db = require('./model/patient_db_utils');
var user_db = require("./model/users_db_utils");
var pat_cntrl = require("./controller/patient_controller");
var usr_cntrl = require("./controller/users_controller");
var sendText = require("./controller/send_text");
var event_db = require("./model/event_db_utils");
var event_cntrl = require("./controller/event_controller");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

function convertJSONForDB(reqBody) {
    var b = JSON.stringify(reqBody).replace(/'/g, '"');
    return JSON.parse(b);
}

app.get('/', (req, res) => {
    console.log("Basic Get");
    res.sendFile(__dirname + '/index.html');
});

app.post('/patient', function(req, res) {
    pat_cntrl.newPatRecord(convertJSONForDB(req.body), res, patient_db);
});

//Mobile App Related Endpoints

app.get('/patient/:email', function(req, res) {
    pat_cntrl.findPatRecord(req,res,patient_db);
});

app.post('/user', function(req, res) {
    usr_cntrl.newUserRecord(convertJSONForDB(req.body), res, user_db);
});

app.get('/user/:email/:password', function(req, res) {
    console.log("App Login Initiated..");
    usr_cntrl.findUserRecord(req, res, user_db);
    
});

// Adding prescription schedule from the Mobile APP
app.post('/patient/appSubmit', function(req, res) {
    pat_cntrl.newAppPatRecord(req, res, patient_db);
    
});

app.get('/twilio', function(req, res) {
    sendText.sendSMS();
    res.status(200);
    res.send("Text Sent");
});

app.post('/event', function(req, res) {
    event_cntrl.updateEvent(req, res, event_db);
});

app.get('/event/:email', function(req, res) {
    event_cntrl.findEvent(req, res, event_db);
});

app.listen(port);
console.log('Listening on port...' + port);
