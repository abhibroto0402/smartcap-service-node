var analytics_weekly = "mongodb://127.0.0.1/weekly";
var analytics_biweekly = "mongodb://127.0.0.1/biweekly";
var MongoClient = require('mongodb').MongoClient;
var fi1;
var fi2;
var getGraphDetails = function (req, res) {
    var email = "{\"email\":\"" + req.params.email + "\"}";
    var email_json = JSON.parse(email);
    MongoClient.connect(analytics_weekly, function (err, db) {
        if(err){
            console.log('Unable to connect to the DB server. Error:', err);

        }
        else {
            console.log('Connection established' , analytics_weekly);
            var collection = db.collection('weekly');
            collection.find(email_json).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding User Records");
                    res = "";
                }
                else if (typeof results[0] == 'undefined') {
                    res.status(404);
                }
                else {
			fi1 = results[0].daily_comp;
               		console.log(fi1);
		 }
            });
        }

    });

    MongoClient.connect(analytics_biweekly, function (err, db) {
        if(err){
            console.log('Unable to connect to the DB server. Error:', err);

        }
        else {
            console.log('Connection established', analytics_biweekly);
            var collection = db.collection('biweekly');
            collection.find(email_json).toArray(function(err, results) {
                if (err) {
                    console.log("Error Encountered finding User Records");
                    res = "";
                }
                else if (typeof results[0] == 'undefined') {
                    res.status(404);
                }
                else {
                    	fi2 = results[0].daily_comp;
			console.log(fi2);
			console.log("This might work!: ", fi1, fi2);
        		res.send(JSON.stringify({'a':fi1, 'b': fi2}));
                }
            });
        }

    });
}

module.exports.getGraphDetails = getGraphDetails;
