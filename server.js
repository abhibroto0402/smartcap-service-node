var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://" + process.env.IP + "/patient";
var app = express();
var port = process.env.PORT;
var bodyParser = require('body-parser');
var reqBody;
var patient_phone;
var res_doc;
app.use(bodyParser.urlencoded({
    extended: false
}))

function convertJSONForDB(reqBody) {
    var b = JSON.stringify(reqBody).replace(/'/g, '"');
    return JSON.parse(b);
}

function insertData(data) {
    MongoClient.connect(url, function(err, db, callback) {
        assert.equal(null, err);
        db.collection('patient').insertOne(data);
        db.close();

    });
}

var findPatient = function(db, callback) {
    patient_phone = JSON.parse(patient_phone);
    db.collection('patient').find(patient_phone).toArray(function(err, results) {
        assert.equal(err, null);
        console.log(results);
        res_doc= results;
    })
};

app.get('/', (req, res) => {
    console.log("Basic Get");
    res.sendFile(__dirname + '/index.html')
});

app.post('/patient', function(req, res) {
    reqBody = req.body;
    res.sendStatus(200);
    insertData(convertJSONForDB(reqBody));
})

app.get('/patient/:phone', function(req, res) {
    console.log("Parameterized Get request");
    patient_phone = "{\"phone\":\"" + req.params.phone + "\"}";
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        findPatient(db, function() {
            db.close();
        });
    });
    res.send(res_doc);
    res_doc="";
});

app.listen(port, process.env.IP);
console.log('Listening on port...' + port, process.env.IP);
