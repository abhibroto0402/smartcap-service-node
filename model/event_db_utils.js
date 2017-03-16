var event_url = "mongodb://127.0.0.1/events";
var MongoClient = require('mongodb').MongoClient;
var updatePatEvent = function updatePatEvent(jsonData, res, email) {
    MongoClient.connect(event_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to update', event_url);
            var collection = db.collection('events');
            var num;
            var temp, humidity;
            collection.find(email).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding Patient Records");
                }
                else if (typeof results[0] == 'undefined') {
                    console.log("Record Not found");
                }
                else {
                    console.log("Found Record");
                    num = jsonData.num;
                    temp = jsonData.temp_alert;
                    humidity = jsonData.humidity_alert;
                }

                console.log("This is the number of times taken: " + num);
                var updatingJson = results[0];
                updatingJson.Event.open_cap_event_times = num;
                updatingJson.date=jsonData.date;
                updatingJson.Event.temp_alert= temp;
                updatingJson.Event.humidity_alert= humidity;
                collection.update({
                        'email': jsonData['email']  
                    }, updatingJson, {
                        upsert: true
                    },
                    function(err, object) {
                        if (err) {
                            console.warn(err.message); // returns error if no matching object found
                        }
                        else {
                            res.status(200);
                            res.send("Event Update Success");
                        }
                    });
            });
        }
    });
};

var findPatEvent = function findEvent(res, email) {
    MongoClient.connect(event_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to update', event_url);
            var collection = db.collection('events');
            collection.find(email).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding Patient Records");
                    res = "";
                }
                else if (typeof results[0] == 'undefined') {
                    res.status(200);
                    res.send("Record Not Found. Please add prescription");

                }
                else {
                    res.status(200);
                    res.send(results[0]);

                }
            });
        }

    });
};

module.exports.updatePatEvent = updatePatEvent;
module.exports.findPatEvent = findPatEvent;
