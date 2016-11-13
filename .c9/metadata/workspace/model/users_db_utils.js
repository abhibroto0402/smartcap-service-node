{"filter":false,"title":"users_db_utils.js","tooltip":"/model/users_db_utils.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":45,"column":29},"end":{"row":45,"column":30},"action":"insert","lines":["t"],"id":473}],[{"start":{"row":45,"column":30},"end":{"row":45,"column":31},"action":"insert","lines":["U"],"id":474}],[{"start":{"row":45,"column":27},"end":{"row":45,"column":31},"action":"remove","lines":["getU"],"id":475},{"start":{"row":45,"column":27},"end":{"row":45,"column":40},"action":"insert","lines":["getUserName()"]}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"insert","lines":["g"],"id":476}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"remove","lines":["g"],"id":477}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"insert","lines":["h"],"id":478}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"remove","lines":["h"],"id":479}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"insert","lines":["g"],"id":480}],[{"start":{"row":43,"column":1},"end":{"row":43,"column":2},"action":"insert","lines":["e"],"id":481}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"remove","lines":["ge"],"id":482},{"start":{"row":43,"column":0},"end":{"row":43,"column":13},"action":"insert","lines":["getUserName()"]}],[{"start":{"row":43,"column":12},"end":{"row":43,"column":13},"action":"remove","lines":[")"],"id":483}],[{"start":{"row":43,"column":11},"end":{"row":43,"column":12},"action":"remove","lines":["("],"id":484}],[{"start":{"row":43,"column":11},"end":{"row":43,"column":12},"action":"insert","lines":["="],"id":485}],[{"start":{"row":43,"column":12},"end":{"row":43,"column":13},"action":"insert","lines":[" "],"id":486}],[{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"insert","lines":["v"],"id":487}],[{"start":{"row":43,"column":1},"end":{"row":43,"column":2},"action":"insert","lines":["a"],"id":488}],[{"start":{"row":43,"column":2},"end":{"row":43,"column":3},"action":"insert","lines":["r"],"id":489}],[{"start":{"row":43,"column":3},"end":{"row":43,"column":4},"action":"insert","lines":[" "],"id":490}],[{"start":{"row":45,"column":39},"end":{"row":45,"column":40},"action":"remove","lines":[")"],"id":491}],[{"start":{"row":45,"column":38},"end":{"row":45,"column":39},"action":"remove","lines":["("],"id":492}],[{"start":{"row":43,"column":38},"end":{"row":43,"column":39},"action":"insert","lines":["e"],"id":493}],[{"start":{"row":43,"column":39},"end":{"row":43,"column":40},"action":"insert","lines":["m"],"id":494}],[{"start":{"row":43,"column":40},"end":{"row":43,"column":41},"action":"insert","lines":["a"],"id":495}],[{"start":{"row":43,"column":41},"end":{"row":43,"column":42},"action":"insert","lines":["i"],"id":496}],[{"start":{"row":43,"column":42},"end":{"row":43,"column":43},"action":"insert","lines":["l"],"id":497}],[{"start":{"row":43,"column":44},"end":{"row":43,"column":45},"action":"insert","lines":["{"],"id":498}],[{"start":{"row":43,"column":45},"end":{"row":45,"column":1},"action":"insert","lines":["","    ","}"],"id":499}],[{"start":{"row":45,"column":1},"end":{"row":45,"column":2},"action":"insert","lines":[";"],"id":500}],[{"start":{"row":43,"column":45},"end":{"row":44,"column":0},"action":"insert","lines":["",""],"id":501},{"start":{"row":44,"column":0},"end":{"row":44,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":44,"column":4},"end":{"row":65,"column":7},"action":"insert","lines":["MongoClient.connect(usr_url, function(err, db) {","        if (err) {","            console.log('Unable to connect to the DB server. Error:', err);","        }","        else {","            console.log('Connection established to', usr_url);","            var collection = db.collection('users');","            collection.find(email_pswd_json).toArray(function(err, results) {","                if (err) {","                    console.log(\"Error Encountered finding User\");","                    res = \"\";","                }","                else if (typeof results[0] == 'undefined') {","                    res.sendStatus(401);","                }","                else {","                    res.status(200);","                    res.send(results);","                }","            });","        }","    });"],"id":502}],[{"start":{"row":40,"column":4},"end":{"row":40,"column":15},"action":"remove","lines":["return res;"],"id":503}],[{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"remove","lines":["    "],"id":504}],[{"start":{"row":39,"column":7},"end":{"row":40,"column":0},"action":"remove","lines":["",""],"id":505}],[{"start":{"row":50,"column":28},"end":{"row":50,"column":43},"action":"remove","lines":["email_pswd_json"],"id":506},{"start":{"row":50,"column":28},"end":{"row":50,"column":29},"action":"insert","lines":["e"]}],[{"start":{"row":50,"column":29},"end":{"row":50,"column":30},"action":"insert","lines":["m"],"id":507}],[{"start":{"row":50,"column":28},"end":{"row":50,"column":30},"action":"remove","lines":["em"],"id":508},{"start":{"row":50,"column":28},"end":{"row":50,"column":33},"action":"insert","lines":["email"]}],[{"start":{"row":53,"column":19},"end":{"row":53,"column":29},"action":"remove","lines":[" res = \"\";"],"id":509}],[{"start":{"row":53,"column":18},"end":{"row":53,"column":19},"action":"remove","lines":[" "],"id":510}],[{"start":{"row":53,"column":17},"end":{"row":53,"column":18},"action":"remove","lines":[" "],"id":511}],[{"start":{"row":53,"column":16},"end":{"row":53,"column":17},"action":"remove","lines":[" "],"id":512}],[{"start":{"row":53,"column":12},"end":{"row":53,"column":16},"action":"remove","lines":["    "],"id":513}],[{"start":{"row":53,"column":8},"end":{"row":53,"column":12},"action":"remove","lines":["    "],"id":514}],[{"start":{"row":53,"column":4},"end":{"row":53,"column":8},"action":"remove","lines":["    "],"id":515}],[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["    "],"id":516}],[{"start":{"row":52,"column":66},"end":{"row":53,"column":0},"action":"remove","lines":["",""],"id":517}],[{"start":{"row":55,"column":20},"end":{"row":55,"column":40},"action":"remove","lines":["res.sendStatus(401);"],"id":518},{"start":{"row":55,"column":20},"end":{"row":55,"column":66},"action":"insert","lines":["console.log(\"Error Encountered finding User\");"]}],[{"start":{"row":55,"column":33},"end":{"row":55,"column":34},"action":"insert","lines":["2"],"id":519}],[{"start":{"row":55,"column":34},"end":{"row":55,"column":35},"action":"insert","lines":["."],"id":520}],[{"start":{"row":55,"column":35},"end":{"row":55,"column":36},"action":"insert","lines":[" "],"id":521}],[{"start":{"row":52,"column":33},"end":{"row":52,"column":34},"action":"insert","lines":["1"],"id":522}],[{"start":{"row":52,"column":34},"end":{"row":52,"column":35},"action":"insert","lines":["."],"id":523}],[{"start":{"row":52,"column":35},"end":{"row":52,"column":36},"action":"insert","lines":[" "],"id":524}],[{"start":{"row":58,"column":19},"end":{"row":59,"column":38},"action":"remove","lines":[" res.status(200);","                    res.send(results);"],"id":525}],[{"start":{"row":58,"column":19},"end":{"row":58,"column":20},"action":"insert","lines":["g"],"id":526}],[{"start":{"row":58,"column":20},"end":{"row":58,"column":21},"action":"insert","lines":["e"],"id":527}],[{"start":{"row":58,"column":21},"end":{"row":58,"column":22},"action":"insert","lines":["t"],"id":528}],[{"start":{"row":58,"column":22},"end":{"row":58,"column":23},"action":"insert","lines":["U"],"id":529}],[{"start":{"row":58,"column":23},"end":{"row":58,"column":24},"action":"insert","lines":["s"],"id":530}],[{"start":{"row":58,"column":19},"end":{"row":58,"column":24},"action":"remove","lines":["getUs"],"id":531},{"start":{"row":58,"column":19},"end":{"row":58,"column":30},"action":"insert","lines":["getUserName"]}],[{"start":{"row":58,"column":30},"end":{"row":58,"column":31},"action":"insert","lines":[" "],"id":532}],[{"start":{"row":58,"column":31},"end":{"row":58,"column":32},"action":"insert","lines":["="],"id":533}],[{"start":{"row":58,"column":32},"end":{"row":58,"column":33},"action":"insert","lines":[" "],"id":534}],[{"start":{"row":58,"column":33},"end":{"row":58,"column":34},"action":"insert","lines":["r"],"id":535}],[{"start":{"row":58,"column":34},"end":{"row":58,"column":35},"action":"insert","lines":["e"],"id":536}],[{"start":{"row":58,"column":35},"end":{"row":58,"column":36},"action":"insert","lines":["s"],"id":537}],[{"start":{"row":58,"column":36},"end":{"row":58,"column":37},"action":"insert","lines":["u"],"id":538}],[{"start":{"row":58,"column":37},"end":{"row":58,"column":38},"action":"insert","lines":["l"],"id":539}],[{"start":{"row":58,"column":38},"end":{"row":58,"column":39},"action":"insert","lines":["t"],"id":540}],[{"start":{"row":58,"column":39},"end":{"row":58,"column":40},"action":"insert","lines":["s"],"id":541}],[{"start":{"row":58,"column":40},"end":{"row":58,"column":42},"action":"insert","lines":["[]"],"id":542}],[{"start":{"row":58,"column":41},"end":{"row":58,"column":42},"action":"insert","lines":["0"],"id":543}],[{"start":{"row":58,"column":43},"end":{"row":58,"column":44},"action":"insert","lines":["."],"id":544}],[{"start":{"row":58,"column":44},"end":{"row":58,"column":53},"action":"insert","lines":["user_name"],"id":545}],[{"start":{"row":58,"column":53},"end":{"row":58,"column":54},"action":"insert","lines":[";"],"id":546}],[{"start":{"row":58,"column":19},"end":{"row":58,"column":30},"action":"remove","lines":["getUserName"],"id":547},{"start":{"row":58,"column":19},"end":{"row":58,"column":20},"action":"insert","lines":["u"]}],[{"start":{"row":58,"column":20},"end":{"row":58,"column":21},"action":"insert","lines":["s"],"id":548}],[{"start":{"row":58,"column":19},"end":{"row":58,"column":21},"action":"remove","lines":["us"],"id":549},{"start":{"row":58,"column":19},"end":{"row":58,"column":28},"action":"insert","lines":["user_name"]}],[{"start":{"row":65,"column":0},"end":{"row":67,"column":3},"action":"insert","lines":["Object.defineProperty(exports, \"count\", {","  get: function() { return count; }","});"],"id":550}],[{"start":{"row":65,"column":32},"end":{"row":65,"column":37},"action":"remove","lines":["count"],"id":551},{"start":{"row":65,"column":32},"end":{"row":65,"column":33},"action":"insert","lines":["u"]}],[{"start":{"row":65,"column":33},"end":{"row":65,"column":34},"action":"insert","lines":["s"],"id":552}],[{"start":{"row":65,"column":34},"end":{"row":65,"column":35},"action":"insert","lines":["e"],"id":553}],[{"start":{"row":65,"column":35},"end":{"row":65,"column":36},"action":"insert","lines":["r"],"id":554}],[{"start":{"row":65,"column":32},"end":{"row":65,"column":36},"action":"remove","lines":["user"],"id":555},{"start":{"row":65,"column":32},"end":{"row":65,"column":41},"action":"insert","lines":["user_name"]}],[{"start":{"row":66,"column":27},"end":{"row":66,"column":32},"action":"remove","lines":["count"],"id":556},{"start":{"row":66,"column":27},"end":{"row":66,"column":28},"action":"insert","lines":["u"]}],[{"start":{"row":66,"column":28},"end":{"row":66,"column":29},"action":"insert","lines":["s"],"id":557}],[{"start":{"row":66,"column":27},"end":{"row":66,"column":29},"action":"remove","lines":["us"],"id":558},{"start":{"row":66,"column":27},"end":{"row":66,"column":36},"action":"insert","lines":["user_name"]}],[{"start":{"row":68,"column":0},"end":{"row":68,"column":39},"action":"remove","lines":["module.exports.user_name = getUserName;"],"id":559}],[{"start":{"row":67,"column":3},"end":{"row":68,"column":0},"action":"remove","lines":["",""],"id":560}],[{"start":{"row":66,"column":20},"end":{"row":67,"column":0},"action":"insert","lines":["",""],"id":561},{"start":{"row":67,"column":0},"end":{"row":67,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":67,"column":24},"end":{"row":69,"column":2},"action":"insert","lines":["","      ","  "],"id":562}],[{"start":{"row":67,"column":6},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":563},{"start":{"row":68,"column":0},"end":{"row":68,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":65,"column":0},"end":{"row":71,"column":3},"action":"remove","lines":["Object.defineProperty(exports, \"user_name\", {","  get: function() { ","      ","      return user_name; ","      ","  }","});"],"id":564}],[{"start":{"row":64,"column":2},"end":{"row":65,"column":0},"action":"remove","lines":["",""],"id":565}],[{"start":{"row":64,"column":2},"end":{"row":65,"column":0},"action":"insert","lines":["",""],"id":566}],[{"start":{"row":35,"column":36},"end":{"row":35,"column":38},"action":"insert","lines":["[]"],"id":567}],[{"start":{"row":35,"column":37},"end":{"row":35,"column":38},"action":"insert","lines":["0"],"id":568}],[{"start":{"row":35,"column":38},"end":{"row":35,"column":39},"action":"remove","lines":["]"],"id":569}],[{"start":{"row":35,"column":37},"end":{"row":35,"column":38},"action":"remove","lines":["0"],"id":570}],[{"start":{"row":35,"column":36},"end":{"row":35,"column":37},"action":"remove","lines":["["],"id":571}],[{"start":{"row":35,"column":36},"end":{"row":35,"column":38},"action":"insert","lines":["[]"],"id":572}],[{"start":{"row":35,"column":37},"end":{"row":35,"column":38},"action":"insert","lines":["0"],"id":573}]]},"ace":{"folds":[],"scrolltop":373,"scrollleft":0,"selection":{"start":{"row":35,"column":38},"end":{"row":35,"column":38},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1479025655048,"hash":"3ac58739084bc9607586759e8a24e0ce47d4135d"}