var express = require ('express');
var router = express.Router();

router.get('/dashboard', function (req, res, next) {
    res.render('dashboard');
});

module.exports = router;
