var express = require('express');
var path = require('path');
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: false });
var app = express();
var port =80;
var bodyParser = require('body-parser');
var patient_db = require('./model/patient_db_utils');
var user_db = require("./model/users_db_utils");
var pat_cntrl = require("./controller/patient_controller");
var usr_cntrl = require("./controller/users_controller");
var analytics = require ("./controller/analytics_weekly");
var sendText = require("./controller/send_text");
var event_db = require("./model/event_db_utils");
var event_cntrl = require("./controller/event_controller");
var session = require("client-sessions");
var bcrypt = require('bcryptjs');
var index = require('./routes/index');
var dashboard = require ('./routes/dashboard');
var cookieParser = require('cookie-parser');
var hashCookies;

//View Engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

//Set Static Folder
app.use(express.static(__dirname));


//Body parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index);

app.use(session({
    cookieName: 'session',
    secret: 'random123123123123432423', //encrypt the session id
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));

app.use(cookieParser());

function convertJSONForDB(reqBody) {
    var b = JSON.stringify(reqBody).replace(/'/g, '"');
    return JSON.parse(b);
}

app.post('/login', function (req, res){
    usr_cntrl.validateUser(req, res, user_db, bcrypt);
    req.session.user= req.body.email;
    hashCookies = bcrypt.hashSync(req.body.email, bcrypt.genSaltSync(10));
    res.cookie('passkey', hashCookies, {httpOnly: true});
});

app.get('/dashboard/:email', csrfProtection, function (req, res) {
    try{
        if(bcrypt.compareSync(req.params.email, req.cookies.passkey)) {
            analytics.getGraphDetails(req,res);
            res.render(__dirname + '/views/dashboard.html');
        }
        else {
            res.redirect('/');
        }
    } catch (err){
        res.redirect('/');
    }
});

app.get('/logout', function (req, res) {
    res.clearCookie('passkey');
    res.clearCookie('email');
    res.redirect('/');
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
    req.body.email= req.params.email;
    req.body.password = req.params.password;
    usr_cntrl.findUserRecord(req, res, user_db, bcrypt);
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
