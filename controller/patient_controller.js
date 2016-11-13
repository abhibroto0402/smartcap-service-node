var newPatRecord = function newPatRecord(jsonData, res, patient_db) {
    var drug_counter = 0;
    for (var i = 0; i < Object.keys(jsonData).length; i++) {
        if (jsonData["smartcap" + i] != undefined) {
            drug_counter++;
        }

    }
    jsonData.number_of_drugs =drug_counter;
    drug_counter = 0;
    patient_db.uploadPatDb(jsonData, res);

};

var findPatRecord = function findPatRecord(req, res, patient_db){
     var patient_email = "{\"email\":\"" + req.params.email + "\"}";
     patient_email = JSON.parse(patient_email);
     patient_db.findPatDb(patient_email,res);
};

var newAppPatRecord = function newAppPatRecord(req, res, patient_db){
    patient_db.uploadPatDb(req.body, res);
};

module.exports.newAppPatRecord = newAppPatRecord;
module.exports.findPatRecord= findPatRecord;
module.exports.newPatRecord = newPatRecord;