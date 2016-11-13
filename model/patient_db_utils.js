var pat_url = "mongodb://" + process.env.IP + "/patient";
var MongoClient = require('mongodb').MongoClient;

var uploadPatDb = function uploadPatDb(jsonData, res) {
    MongoClient.connect(pat_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
            res.status(400);
        }
        else {
            console.log('Connection established to', pat_url);
            var collection = db.collection('patient');
            collection.insertOne(jsonData);
            res.send("Data Insertion Successful")
            res.status(200);

        }
    });

};

var findPatDb = function findPatDb(email, res) {
    MongoClient.connect(pat_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', pat_url);
            var collection = db.collection('patient');
            collection.find(email).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding Patient Records");
                    res = "";
                }
                else if (typeof results[0] == 'undefined') {
                    res.sendStatus(401);
                }
                else {
                    res.status(200);
                    res.send(results);
                }
            });

        }
    });

};

function getNumberOfPrescription(email){
    MongoClient.connect(pat_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', pat_url);
            var collection = db.collection('patient');
            collection.find(email).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding Patient Records");
                    return "";
                }
                else if (typeof results[0] == 'undefined') {
                    return "";
                }
                else {
                    return results[0].number_of_drugs;
                }
            });

        }
    });
}

var uploadAppPatDb= function uploadAppPatDb(email, res){
    var num = getNumberOfPrescription(email);
};
module.exports.uploadAppPatDb= uploadAppPatDb;
module.exports.findPatDb = findPatDb;
module.exports.uploadPatDb = uploadPatDb;