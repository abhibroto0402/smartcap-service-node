var updateEvent = function (req, res, event_db){
    var patient_email = "{\"email\":\"" + req.body.email + "\"}";
    patient_email =JSON.parse(patient_email);
    event_db.updatePatEvent(req.body, res, patient_email);
};
var findEvent = function(req, res, event_db){
    var patient_email = "{\"email\":\"" + req.params.email + "\"}";
     patient_email = JSON.parse(patient_email);
     event_db.findPatEvent(res, patient_email);
};
module.exports.updateEvent = updateEvent;
module.exports.findEvent = findEvent;