var newUserRecord = function newUserRecord(jsonData, res, user_db) {
    user_db.uploadUsersDb(jsonData);
    res.send("Data Inserted");
    res.status(200);

};

var findUserRecord = function findUserRecord(req, res, user_db){
   var email_pswd = "{\"email\":\"" + req.params.email + "\",\"password\":\"" + req.params.password + "\" }";
   email_pswd = JSON.parse(email_pswd);
   user_db.findUserDb(email_pswd,res);
};

var validateUser = function validateUser(req, res, user_db){
    var email_pswd = "{\"email\":\"" + req.body.email + "\",\"password\":\"" + req.body.password + "\" }";
    email_pswd = JSON.parse(email_pswd);
    user_db.findUserWeb(email_pswd,res, req);
};
module.exports.newUserRecord = newUserRecord;
module.exports.findUserRecord =findUserRecord;
module.exports.validateUser =validateUser;