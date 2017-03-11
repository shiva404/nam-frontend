var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/name', function(req, res) {
  res.json({
    name: 'Shiv '
  });
});

router.get('/data', function(req, res){
  res.json({
    data: "Test data"
  });
});

router.get('/data/test', function(req, res){
  res.json({
    data: 'Data Test'
  });
});

module.exports = router;
