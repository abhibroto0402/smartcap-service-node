var analytics_weekly = "mongodb://127.0.0.1/weekly";
var MongoClient = require('mongodb').MongoClient;

var getGraphDetails = function (req, res) {
    var finalString="{}";
    var email = "{\"email\":\"" + req.body.email + "\"}";
    var email_json = JSON.parse(email);
    MongoClient.connect(analytics_weekly, function (err, db) {
        if(err){
            console.log('Unable to connect to the DB server. Error:', err);

        }
        else {
            console.log('Connection established');
            var collection = db.collection('weekly');
            collection.find(email_json).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding User Records");
                    res = "";
                }
                else if (typeof results[0] == 'undefined') {
                    res.status(404);
                }
                else {
                    finalString = results[0].daily_comp;
                }
            });
        }

    });

    MongoClient.connect(analytics_biweekly, function (err, db) {
        if(err){
            console.log('Unable to connect to the DB server. Error:', err);

        }
        else {
            console.log('Connection established');
            var collection = db.collection('biweekly');
            collection.find(email_json).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding User Records");
                    res = "";
                }
                else if (typeof results[0] == 'undefined') {
                    res.status(404);
                }
                else {
                    finalString = finalString + results[0].daily_comp;
                }
            });
        }

    });

    res.status(200);
    res.send(finalString);


}