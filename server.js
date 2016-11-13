var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://" + process.env.IP + "/patient";
var user_url = "mongodb://" + process.env.IP + "/users";
var app = express();
var port = process.env.PORT;
var bodyParser = require('body-parser');
var reqBody;
var patient_email;
var email_pswd;
var res_doc;
var user_doc;


app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

function convertJSONForDB(reqBody) {
    var b = JSON.stringify(reqBody).replace(/'/g, '"');
    return JSON.parse(b);
}

function insertData(url_db, collection_name, data) {
    MongoClient.connect(url_db, function(err, db, callback) {
        assert.equal(null, err);
        db.collection(collection_name).insertOne(data);
        db.close();

    });
}

var findPatient = function(db, callback) {
    patient_email = JSON.parse(patient_email);
    db.collection('patient').find(patient_email).toArray(function(err, results) {
        assert.equal(err, null);
        res_doc = results;
    });
};

var findUser = function(db, callback) {
    email_pswd = JSON.parse(email_pswd);
    db.collection('users').find(email_pswd).toArray(function(err, results) {
        if (err) {
            user_doc[0] = "";
        }
        else if (typeof results[0] == 'undefined' ) {
            console.log("Not Found");
            user_doc=results;
        }
        else {
            console.log("Found");
            console.log(results);
            user_doc= results;
            
        }

    });
};

app.get('/', (req, res) => {
    console.log("Basic Get");
    res.sendFile(__dirname + '/index.html')
});

app.post('/patient', function(req, res) {
    reqBody = req.body;
    res.sendStatus(200);
    insertData(url, 'patient', convertJSONForDB(reqBody));
});



app.get('/patient/:email', function(req, res) {
    
    console.log("Parameterized Get request");
    patient_email = "{\"email\":\"" + req.params.email + "\"}";
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        findPatient(db, function() {
            db.close();
        });
    });
    console.log(res_doc);
    res.send(res_doc);
    res_doc = "";
});


//App Related functions 
app.post('/user', function(req, res) {
    var patient_db = require('./model/update_patient_db_utils');
    var update_pat_cntrl = require("./controller/update_patient");
    update_pat_cntrl.newRecord(convertJSONForDB(req.body), res, patient_db);
    /*var reqBody_user = req.body;
    res.send(reqBody_user);
    res.status(200);
    insertData(user_url, 'users', convertJSONForDB(reqBody_user));*/
});

app.get('/user/:email/:password', function(req, res) {
    console.log("App Login Initiated..");
    email_pswd = "{\"email\":\"" + req.params.email + "\",\"password\":\"" + req.params.password + "\" }";
    MongoClient.connect(user_url, function(err, db) {
        assert.equal(null, err);
        findUser(db, function() {
            db.close();
        });
    });
    try {
    if (typeof user_doc[0] == 'undefined' ) {
        res.sendStatus(401);
    }
    else {
        res.status(200);
        res.send("We found you bro!");
    }
    }catch(err){
        res.sendStatus(400);
        
    }
    
});


// Adding prescription schedule from the Mobile APP
app.post('/patient/app/:email', function(req, res) {
    var patient_db = require('./model/update_patient_db_utils');
    update_pat_cntrl.a(req, res, patient_db);
});

app.listen(port, process.env.IP);
console.log('Listening on port...' + port, process.env.IP);
