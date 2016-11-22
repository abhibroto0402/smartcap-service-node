var twilio_client = require('twilio')('AC31ea5942c4d9def2b961decd50056dab','428efe5136f47476b458d21954953fd2');

var sendSMS = function sendSMS(){
twilio_client.sendMessage({
       to: '+16146348984',
       from: '+16148266360',
       body: 'Do Not Reply: This is Abhi, I am just testing :)'
   }, function(err, data){
       if(err){
           console.log(err);
       }
       console.log(data);
       
   }) ;
}
module.exports.sendSMS = sendSMS;