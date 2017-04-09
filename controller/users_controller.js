var newUserRecord = function newUserRecord(jsonData, res, user_db) {
    user_db.uploadUsersDb(jsonData);
    res.send("Data Inserted");
    res.status(200);

};

var findUserRecord = function findUserRecord(req, res, user_db, bcrypt){
    var email = "{\"email\":\"" + req.body.email + "\"}";
    email_json = JSON.parse(email);
    user_db.findUserRecord(bcrypt,res, req, email_json);
};

var validateUser = function validateUser(req, res, user_db, bcrypt){
    var email = "{\"email\":\"" + req.body.email + "\"}";
    email_json = JSON.parse(email);
    user_db.findUserWeb(bcrypt,res, req, email_json);
};
module.exports.newUserRecord = newUserRecord;
module.exports.findUserRecord =findUserRecord;
module.exports.validateUser =validateUser;