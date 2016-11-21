{"filter":false,"title":"update_users.js","tooltip":"/controller/update_users.js","undoManager":{"mark":55,"position":55,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":43},"action":"insert","lines":["var newPatRecord = function newPatRecord(jsonData, res, patient_db) {","    var drug_counter = 0;","    for (var i = 0; i < Object.keys(jsonData).length; i++) {","        if (jsonData[\"smartcap\" + i] != undefined) {","            console.log(jsonData[\"smartcap\" + i]);","            drug_counter++;","        }","","    }","    jsonData.number_of_drugs =drug_counter;","    drug_counter = 0;","    patient_db.uploadPatDbd(jsonData);","    res.send(\"Data Inserted\");","    res.status(200);","","};","","module.exports.newPatRecord = newPatRecord;"],"id":1}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"remove","lines":["t"],"id":2}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"remove","lines":["a"],"id":3}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"remove","lines":["P"],"id":4}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["U"],"id":5}],[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["s"],"id":6}],[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["e"],"id":7}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["r"],"id":8}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"remove","lines":["t"],"id":9}],[{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"remove","lines":["a"],"id":10}],[{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"remove","lines":["P"],"id":11}],[{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":["U"],"id":12}],[{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["S"],"id":13}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":["e"],"id":14}],[{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"insert","lines":["r"],"id":15}],[{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"remove","lines":["r"],"id":16}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"remove","lines":["e"],"id":17}],[{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"remove","lines":["S"],"id":18}],[{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["s"],"id":19}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":["e"],"id":20}],[{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"insert","lines":["r"],"id":21}],[{"start":{"row":0,"column":29},"end":{"row":0,"column":42},"action":"remove","lines":["newUserRecord"],"id":22},{"start":{"row":0,"column":29},"end":{"row":0,"column":42},"action":"insert","lines":["newUserRecord"]}],[{"start":{"row":1,"column":4},"end":{"row":10,"column":21},"action":"remove","lines":["var drug_counter = 0;","    for (var i = 0; i < Object.keys(jsonData).length; i++) {","        if (jsonData[\"smartcap\" + i] != undefined) {","            console.log(jsonData[\"smartcap\" + i]);","            drug_counter++;","        }","","    }","    jsonData.number_of_drugs =drug_counter;","    drug_counter = 0;"],"id":23}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"remove","lines":["    "],"id":24}],[{"start":{"row":0,"column":71},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":25}],[{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"remove","lines":["t"],"id":26}],[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"remove","lines":["a"],"id":27}],[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"remove","lines":["P"],"id":28}],[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"insert","lines":["U"],"id":29}],[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"insert","lines":["s"],"id":30}],[{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"insert","lines":["e"],"id":31}],[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["r"],"id":32}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["t"],"id":33}],[{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"remove","lines":["a"],"id":34}],[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"remove","lines":["P"],"id":35}],[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":["U"],"id":36}],[{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["s"],"id":37}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["e"],"id":38}],[{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["r"],"id":39}],[{"start":{"row":0,"column":58},"end":{"row":0,"column":65},"action":"remove","lines":["patient"],"id":40},{"start":{"row":0,"column":58},"end":{"row":0,"column":59},"action":"insert","lines":["u"]}],[{"start":{"row":0,"column":59},"end":{"row":0,"column":60},"action":"insert","lines":["s"],"id":41}],[{"start":{"row":0,"column":60},"end":{"row":0,"column":61},"action":"insert","lines":["e"],"id":42}],[{"start":{"row":0,"column":61},"end":{"row":0,"column":62},"action":"insert","lines":["r"],"id":43}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":11},"action":"remove","lines":["patient"],"id":44},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["u"]}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["s"],"id":45}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["e"],"id":46}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["r"],"id":47}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"remove","lines":["t"],"id":48}],[{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"remove","lines":["a"],"id":49}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"remove","lines":["P"],"id":50}],[{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["U"],"id":51}],[{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["s"],"id":52}],[{"start":{"row":1,"column":20},"end":{"row":1,"column":21},"action":"insert","lines":["e"],"id":53}],[{"start":{"row":1,"column":21},"end":{"row":1,"column":22},"action":"insert","lines":["r"],"id":54}],[{"start":{"row":1,"column":22},"end":{"row":1,"column":23},"action":"insert","lines":["s"],"id":55}],[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"remove","lines":["d"],"id":56}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":0},"end":{"row":6,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1479008344320,"hash":"3617122298912fd9d0fde6a7093bfc5e8e315879"}