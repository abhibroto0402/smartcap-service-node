var pat_url = "mongodb://" + process.env.IP + "/patient";
var MongoClient = require('mongodb').MongoClient;

var uploadPatDb = function uploadPatDb(jsonData) {
    MongoClient.connect(pat_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', pat_url);
            var collection = db.collection('patient');
            collection.insertOne(jsonData);

        }
    });

}

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
module.exports.findPatDb = findPatDb;
module.exports.uploadPatDb = uploadPatDb;