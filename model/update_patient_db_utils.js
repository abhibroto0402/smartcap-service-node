var pat_url = "mongodb://" + process.env.IP + "/patient";
var MongoClient = require('mongodb').MongoClient;
var drug_counter = 0;

var uploadDb = function uploadDb(jsonData) {
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



var getNumberOfDrugs = function getNumberOfDrugs(email) {
    MongoClient.connect(pat_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', pat_url);
            var collection = db.collection('patient');
            collection.findOne({
                email: email
            }, function(err, userObj) {
                if (err) {
                    console.log(err);
                }
                else if (userObj) {
                    console.log('Found:', userObj);
                    for (var i = 0; i < Object.keys(userObj).length; i++) {
                        if (userObj["smartcap" + i] != undefined) {
                            console.log(userObj["smartcap" + i]);
                            drug_counter++;
                        }

                    }
                }
            });
        }
    });
    console.log(drug_counter);
    return drug_counter;

}

module.exports.getNumberOfDrugs = getNumberOfDrugs;