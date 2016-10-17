var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://" + process.env.IP + "/patient";
var app = express();
var port = process.env.PORT;
var bodyParser = require('body-parser');
var reqBody;
app.use(bodyParser.urlencoded({
    extended: false
}))
var jsonParser = bodyParser.json()


function convertJSONForDB(reqBody){
    
    var b = JSON.stringify(reqBody).replace(/'/g, '"');
    //console.log(b);
    console.log(JSON.parse(b).smartcap0);
    
    
}


var findPatient = function(db, callback) {
    var cursor = db.collection('patient').find({
        "name": "John Doe"
    });
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        }
        else {
            callback();
        }
    });
};


MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findPatient(db, function() {
        db.close();
    });
});

app.get('/', (req, res) => {
    console.log("Basic Get");
    res.sendFile(__dirname + '/index.html')
});

app.post('/patient',  function(req, res) {
    reqBody = req.body;
    res.sendStatus(200);
    convertJSONForDB(reqBody);
    
})

app.get('/patient/:name', function(req, res) {
    console.log("Parameterized Get request");
    if (req.params.name == 1) {
       res.send();
    }
    else {
        res.send("error");
    }

});

app.listen(port, process.env.IP);
console.log('Listening on port...' + port, process.env.IP);
