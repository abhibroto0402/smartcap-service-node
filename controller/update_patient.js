var newRecord = function newRecord(jsonData, res, patient_db){
    patient_db.uploadDb(jsonData);
    res.send("Data Inserted");
    res.status(200);
    
};

module.exports.newRecord = newRecord;