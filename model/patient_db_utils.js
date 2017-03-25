var pat_url = "mongodb://127.0.0.1/patient";
var MongoClient = require('mongodb').MongoClient;

var uploadPatDb = function uploadPatDb(jsonData, res) {
    MongoClient.connect(pat_url, function (err, db) {
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
    MongoClient.connect(pat_url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', pat_url);
            var collection = db.collection('patient');
            collection.find(email).toArray(function (err, results) {
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
                    res.send(results);
                }
            });

        }
    });

};


var uploadAppPatDb = function uploadAppPatDb(jsonData, res, email) {

    MongoClient.connect(pat_url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to update', pat_url);
            var collection = db.collection('patient');
            var num;
            collection.find(email).toArray(function (err, results) {
                if (err) {
                    console.log("Error Encountered finding Patient Records");
                }
                else if (typeof results[0] == 'undefined') {
                    console.log("Record Not found");
                    num = 0;
                }
                else {
                    console.log("Found Record");
                    num = results[0].number_of_drugs;
                }

                num++;
                console.log("This is the number: " + num);
                jsonData["number_of_drugs"] = num;
                var orgData = jsonData["smartcap"];
                var sc_name = 'smartcap' + (num - 1).toString(10);
                delete jsonData.smartcap;
                jsonData[sc_name] = orgData;
                console.log(jsonData);
                var updatingJson;
                if (num == 1) {
                    updatingJson = jsonData;
                }
                else {
                    updatingJson = results[0];
                    updatingJson["number_of_drugs"] = num;
                    updatingJson[sc_name] = jsonData[sc_name];

                }
                collection.update({
                        'email': jsonData['email']
                    }, updatingJson, {
                        upsert: true
                    },
                    function (err, object) {
                        if (err) {
                            console.warn(err.message); // returns error if no matching object found
                        }
                        else {
                            res.status(200);
                            res.send("Data Inseretion Success");
                        }
                    });
            });
        }
    });
};


var removeDrug = function removeDrug(email, drugName, res) {
    MongoClient.connect(pat_url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', pat_url);
            var collection = db.collection('patient');
            collection.find(email).toArray(function (err, results) {
                if (err) {
                    console.log("Error Encountered finding Patient Records");
                    res = "";
                }
                else if (typeof results[0] == 'undefined') {
                    res.status(200);
                    res.send("Record Not Found. Please add prescription");

                }
                else {
                    var tempJson = results[0];
                    var count;
                    var num = results[0].number_of_drugs;
                    for (var i = 0; i < num - 1; i++) {
                        var t = 'smartcap' + i;
                        var arr = results[0][t];
                        if (arr[1] == drugName) {
                            count=i;
                            delete tempJson[t];
                            delete tempJson['number_of_drugs'];
                            var x = Number (num);
                            tempJson['number_of_drugs']= x--;
                        }
                    }
                    console.log(tempJson);
                    console.log(results[0].number_of_drugs  + " = " + count);
                    if(count==0 && results[0].number_of_drugs =='1') delete tempJson['smartcap0'];
                    else{
                        for(var i=count;i<num;i++){
                            var temp = 'smartcap' + i-1;
                            var tem = 'smartcap' + i;
                            console.log("This is what it is" + temp + ' ' + tem);
                            tempJson[temp] = tempJson[tem];
                            delete tempJson[tem];
                        }
                        // collection.deleteOne(email);
                        // collection.insert(tempJson);
                        console.log(tempJson);
                    }

                }
            });

        }
    });
};


module.exports.uploadAppPatDb = uploadAppPatDb;
module.exports.findPatDb = findPatDb;
module.exports.uploadPatDb = uploadPatDb;
module.exports.removeDrug = removeDrug;
