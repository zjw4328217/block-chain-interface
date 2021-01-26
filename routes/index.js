var express = require('express');
var router = express.Router();
var util  = require('../util')
// console.log(util.getPrice);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
