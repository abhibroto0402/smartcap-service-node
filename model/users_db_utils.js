var usr_url = "mongodb://127.0.0.1/users";
var MongoClient = require('mongodb').MongoClient;
var user_name;
var uploadUsersDb = function uploadUsersDb(jsonData) {
    MongoClient.connect(usr_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', usr_url);
            var collection = db.collection('users');
            collection.insertOne(jsonData);
        }
    });

};

var findUserWeb = function findUserDb(email_pswd_json, res, req) {
    MongoClient.connect(usr_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', usr_url);
            var collection = db.collection('users');
            collection.find(email_pswd_json).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding User");
                    res.redirect("/");
                }
                else if (typeof results[0] == 'undefined') {
                    console.log("user not found");
                	res.redirect("/");
                }
                else {
                    console.log("User found");
                    req.session.user= results[0];
                }
            });
        }
    });
};

var findUserDb = function findUserDb(email_pswd_json, res) {
    MongoClient.connect(usr_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', usr_url);
            var collection = db.collection('users');
            collection.find(email_pswd_json).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding User");
                    res.send("");
                }
                else if (typeof results[0] == 'undefined') {
                    res.status(404)
                    res.send('Email or Password is incorrect!');
                }
                else {
                    console.log("User found");
                    res.status(200);
                    res.send(results[0]);
                }
            });
        }
    });
};

var getUserName= function getUserName(email){
    MongoClient.connect(usr_url, function(err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);
        }
        else {
            console.log('Connection established to', usr_url);
            var collection = db.collection('users');
            collection.find(email).toArray(function(err, results) {
                if (err) {
                    console.log("1. Error Encountered finding User");
                }
                else if (typeof results[0] == 'undefined') {
                    console.log("2. Error Encountered finding User");
                }
                else {
                   user_name = results[0].user_name;
                }
            });
        }
    });
    
};

module.exports.uploadUsersDb = uploadUsersDb;
module.exports.findUserDb = findUserDb;
module.exports.findUserWeb = findUserWeb;
