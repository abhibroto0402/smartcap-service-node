var express = require ('express');
var router = express.Router();

router.get('/dashboard', function (req, res, next) {
    res.send('dashboard');
});

module.exports = router;
