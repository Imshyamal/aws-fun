var express = require('express');
var router = express.Router();

/* GET home page. */
router.put('/', function(req, res, next) {
  res.render('error', { title: 'Express d' });
});

module.exports = router;
// helllo belllo