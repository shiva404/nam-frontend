var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Safe drive!!' });
});

router.get('/home', function(req, res){
    //todo: check if user is authenticated
    //todo: integrate with passport
    res.render('home', {title: "Accident zones"})
});

router.get('/partials/:partialName', function(req, res) {
  var name = req.params.partialName;
  res.render('partials/' + name);
});

module.exports = router;
