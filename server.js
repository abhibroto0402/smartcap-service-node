var express = require('express');
var app = express();
var port =80;
var bodyParser = require('body-parser');
var patient_db = require('./model/patient_db_utils');
var user_db = require("./model/users_db_utils");
var pat_cntrl = require("./controller/patient_controller");
var usr_cntrl = require("./controller/users_controller");
var sendText = require("./controller/send_text");
var event_db = require("./model/event_db_utils");
var event_cntrl = require("./controller/event_controller");

app.use(express.static(__dirname));

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

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', function (req, res){
    console.log(req.body.email);
    console.log(req.body.password);
    usr_cntrl.validateUser(req, res, user_db);
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

app.get('/remove/:email/:drugName',function(req, res){
	pat_cntrl.removeDrug(req, res, patient_db);
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
