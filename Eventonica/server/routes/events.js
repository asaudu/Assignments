var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/events', function(req, res, next) {
  res.render('index', { title: 'This is my events route.' });
});

module.exports = router;
