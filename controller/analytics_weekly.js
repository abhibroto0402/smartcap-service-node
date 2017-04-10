var compliance= "mongodb://127.0.0.1/compliance";
var MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
var weekly_avg, mothly_avg;
var getGraphDetails = function (req, res) {
    var email = "{\"email\":\"" + req.params.email + "\"}";
    var email_json = JSON.parse(email);

    MongoClient.connect(compliance, function (err, db) {
        if (err) {
            console.log('Unable to connect to the DB server. Error:', err);

        }
        else {
            console.log('Connection established', compliance);
            var collection = db.collection('compliance');
            collection.find(email_json).toArray(function (err, results) {
                if (err) {
                    console.log("Error Encountered finding User Records");
                    res = "";
                }
                else if (typeof results[0] == 'undefined') {
                    res.status(404);
                }
                else {
                    var overall_comp = results[0].daily_comp;
                    if(overall_comp.length<30){
                        var sum=0;
                        for(var i=0; i<overall_comp.length; i++){
                            sum = sum + overall_comp[i];
                        }
                        weekly_avg = sum / overall_comp.length;
                        mothly_avg=weekly_avg;

                    }else{
                        var sum=0;
                        for (var i=1; i<=7;i++){
                            sum = sum + overall_comp[overall_comp.length-i];
                        }
                        weekly_avg = sum / 7;
                        sum =0;
                        for (var i=1; i<=30;i++){
                            sum = sum + overall_comp[overall_comp.length-i];
                        }
                        mothly_avg = sum / 30;
                        var obj = {
                            table: []
                        };
                    }
                    weekly_avg = Math.round(Number(weekly_avg));
                    mothly_avg = Math.round(Number(mothly_avg));
                    obj.table.push({weekly: weekly_avg, monthly:mothly_avg, compliance: overall_comp});
                    var json = JSON.stringify(obj);
                    fs.writeFile('myjsonfile.json', json, 'utf8');

                }
            });
        }
    });
}

module.exports.getGraphDetails = getGraphDetails;
