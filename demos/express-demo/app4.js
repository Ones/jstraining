var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req, res, next) {
  console.log('There is a requesting.');
  next();
});

router.use(function(req, res, next) {
  console.log(new Date().toLocaleString());
  next();
});

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

router.get('/:name', function(req, res) {
    if ('love' == req.params.name) {
        res.send('<h2>I love ' + req.query.name + '</h2>');
    }
    else {
        res.send('<h1>Hello ' + req.params.name + '</h1>');
    }
});

router.post('/', function (req, res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name});
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);
