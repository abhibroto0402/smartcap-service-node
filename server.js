var express = require('express');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
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
var session = require("client-sessions");
var bcrypt = require('bcryptjs');
var csrfProtection = csrf({ cookie: true });

app.use(express.static(__dirname));
app.use(cookieParser());
app.use(csrf({ cookie: true }))
app.use(function (req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.locals.csrftoken = req.csrfToken();
    next();
});

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next){
    res.locals.token = req.csrfToken();
    next();
});

app.use(session({
	cookieName: 'session',
	secret: 'random123123123123432423', //encrypt the session id
	duration: 30 * 60 * 1000,
	activeDuration: 5 * 60 * 1000,
}));
app.use(errorHandler);

function requireLogin(req, res, next){
    if(!req.user){
        res.redirect('/');
    }
    else
        next();
};

function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
}

function convertJSONForDB(reqBody) {
    var b = JSON.stringify(reqBody).replace(/'/g, '"');
    return JSON.parse(b);
}

app.get('/', csrfProtection, function(req, res){
    res.render('./index.html', {csrfToken: req.csrfToken()});
});

app.post('/login', function (req, res){
    usr_cntrl.validateUser(req, res, user_db, bcrypt);
    req.session.user= req.body.email;
    res.redirect('/dashboard');
});

app.get('/dashboard', requireLogin, function (req, res) {
   if(req.session &&  req.session.user){
       res.send('It is working');
   }
});

app.post('/patient', function(req, res) {
    pat_cntrl.newPatRecord(convertJSONForDB(req.body), res, patient_db);
});

//Mobile App Related Endpoints

app.get('/patient/:email', function(req, res) {
    pat_cntrl.findPatRecord(req,res,patient_db);
});

app.post('/user', function(req, res) {
    var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    req.body.password = hash;
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
