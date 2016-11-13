{"changed":true,"filter":false,"title":"update_users_db_utils.js","tooltip":"/model/update_users_db_utils.js","value":"var pat_url = \"mongodb://\" + process.env.IP + \"/users\";\nvar MongoClient = require('mongodb').MongoClient;\n\nvar uploadUsersDb = function uploadUsersDb(jsonData) {\n    MongoClient.connect(pat_url, function(err, db) {\n        if (err) {\n            console.log('Unable to connect to the DB server. Error:', err);\n        }\n        else {\n            console.log('Connection established to', pat_url);\n            var collection = db.collection('users');\n            collection.insertOne(jsonData);\n        }\n    });\n\n}\n\nvar findUserDb = function findUserDb (email, password){\n    MongoClient.connect(pat_url, function(err, db) {\n        if (err) {\n            console.log('Unable to connect to the DB server. Error:', err);\n        }\n        else {\n            console.log('Connection established to', pat_url);\n            var collection = db.collection('users');\n            collection.find(jsonData);\n        }\n    });\n}\nmodule.exports.uploadUsersDb = uploadUsersDb;","undoManager":{"mark":-6,"position":100,"stack":[[{"start":{"row":0,"column":51},"end":{"row":0,"column":52},"action":"insert","lines":["r"],"id":5}],[{"start":{"row":0,"column":52},"end":{"row":0,"column":53},"action":"insert","lines":["s"],"id":6}],[{"start":{"row":10,"column":44},"end":{"row":10,"column":51},"action":"remove","lines":["patient"],"id":7},{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"insert","lines":["u"]}],[{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":["s"],"id":8}],[{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"insert","lines":["e"],"id":9}],[{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"insert","lines":["r"],"id":10}],[{"start":{"row":10,"column":48},"end":{"row":10,"column":49},"action":"insert","lines":["s"],"id":11}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"remove","lines":["t"],"id":12}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"remove","lines":["a"],"id":13}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"remove","lines":["P"],"id":14}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["U"],"id":15}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["s"],"id":16}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["e"],"id":17}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":["r"],"id":18}],[{"start":{"row":3,"column":37},"end":{"row":3,"column":38},"action":"insert","lines":["s"],"id":19}],[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"remove","lines":["t"],"id":20}],[{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"remove","lines":["a"],"id":21}],[{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"remove","lines":["P"],"id":22}],[{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["U"],"id":23}],[{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"insert","lines":["s"],"id":24}],[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":["e"],"id":25}],[{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["r"],"id":26}],[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["s"],"id":27}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"remove","lines":["t"],"id":28}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":["a"],"id":29}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"remove","lines":["P"],"id":30}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["U"],"id":31}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["s"],"id":32}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["e"],"id":33}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["r"],"id":34}],[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["s"],"id":35}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":["t"],"id":36}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":["a"],"id":37}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["P"],"id":38}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["U"],"id":39}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["s"],"id":40}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["e"],"id":41}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["r"],"id":42}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["s"],"id":43}],[{"start":{"row":11,"column":43},"end":{"row":12,"column":0},"action":"remove","lines":["",""],"id":44}],[{"start":{"row":15,"column":1},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":45}],[{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":46}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["v"],"id":47}],[{"start":{"row":17,"column":1},"end":{"row":17,"column":2},"action":"insert","lines":["a"],"id":48}],[{"start":{"row":17,"column":2},"end":{"row":17,"column":3},"action":"insert","lines":["r"],"id":49}],[{"start":{"row":17,"column":3},"end":{"row":17,"column":4},"action":"insert","lines":[" "],"id":50}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["f"],"id":51}],[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["i"],"id":52}],[{"start":{"row":17,"column":6},"end":{"row":17,"column":7},"action":"insert","lines":["n"],"id":53}],[{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"insert","lines":["d"],"id":54}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["U"],"id":55}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["d"],"id":56}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"remove","lines":["d"],"id":57}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["s"],"id":58}],[{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["e"],"id":59}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["r"],"id":60}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["D"],"id":61}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["B"],"id":62}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"remove","lines":["B"],"id":63}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["b"],"id":64}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":[" "],"id":65}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["="],"id":66}],[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":[" "],"id":67}],[{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":["f"],"id":68}],[{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["u"],"id":69}],[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["n"],"id":70}],[{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["c"],"id":71}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["t"],"id":72}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["i"],"id":73}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["o"],"id":74}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["n"],"id":75}],[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":[" "],"id":76}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["f"],"id":77}],[{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["i"],"id":78}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["n"],"id":79}],[{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["d"],"id":80}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":30},"action":"remove","lines":["find"],"id":81},{"start":{"row":17,"column":26},"end":{"row":17,"column":36},"action":"insert","lines":["findUserDb"]}],[{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"insert","lines":[" "],"id":82}],[{"start":{"row":17,"column":37},"end":{"row":17,"column":39},"action":"insert","lines":["()"],"id":83}],[{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["e"],"id":84}],[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["m"],"id":85}],[{"start":{"row":17,"column":40},"end":{"row":17,"column":41},"action":"insert","lines":["a"],"id":86}],[{"start":{"row":17,"column":41},"end":{"row":17,"column":42},"action":"insert","lines":["i"],"id":87}],[{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"insert","lines":["l"],"id":88}],[{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":[","],"id":89}],[{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":[" "],"id":90}],[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":["p"],"id":91}],[{"start":{"row":17,"column":46},"end":{"row":17,"column":47},"action":"insert","lines":["a"],"id":92}],[{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":["s"],"id":93}],[{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":["s"],"id":94}],[{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"insert","lines":["w"],"id":95}],[{"start":{"row":17,"column":50},"end":{"row":17,"column":51},"action":"insert","lines":["o"],"id":96}],[{"start":{"row":17,"column":51},"end":{"row":17,"column":52},"action":"insert","lines":["r"],"id":97}],[{"start":{"row":17,"column":52},"end":{"row":17,"column":53},"action":"insert","lines":["d"],"id":98}],[{"start":{"row":17,"column":54},"end":{"row":17,"column":55},"action":"insert","lines":["{"],"id":99}],[{"start":{"row":17,"column":55},"end":{"row":19,"column":1},"action":"insert","lines":["","    ","}"],"id":100}],[{"start":{"row":18,"column":4},"end":{"row":27,"column":7},"action":"insert","lines":["MongoClient.connect(pat_url, function(err, db) {","        if (err) {","            console.log('Unable to connect to the DB server. Error:', err);","        }","        else {","            console.log('Connection established to', pat_url);","            var collection = db.collection('users');","            collection.insertOne(jsonData);","        }","    });"],"id":101}],[{"start":{"row":25,"column":23},"end":{"row":25,"column":32},"action":"remove","lines":["insertOne"],"id":102},{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":["f"]}],[{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":["i"],"id":103}],[{"start":{"row":25,"column":25},"end":{"row":25,"column":26},"action":"insert","lines":["n"],"id":104}],[{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"insert","lines":["d"],"id":105}]]},"ace":{"folds":[],"scrolltop":94,"scrollleft":0,"selection":{"start":{"row":25,"column":28},"end":{"row":25,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":62,"mode":"ace/mode/javascript"}},"timestamp":1479008355849}