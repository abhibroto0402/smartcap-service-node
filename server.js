var express = require('express');
var app = express();
var port = process.env.PORT;
app.get('/', function(request, response) {
    response.send("You reached site");
});

app.get('/patient/:id', function(req, res) {
    if (req.params.id == 1) {
        res.send({
            id: req.params.id,
            
                "name": "John Doe",
                "email": "john.doe@example.com",
                "phone": "999-999-9999",
                "smartcap": [{
                    "smartcap_id": "7777",
                    "drug_id": "00001",
                    "time": ["noon", "night"],
                    "meal": "After"
                }]
            
        });
    } else {
        res.send("error");
    }

});

app.listen(port, process.env.IP);
console.log('Listening on port...' + port, process.env.IP);
