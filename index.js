var express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express()
var user = require ('./routes/autores')
var port = 3000;
app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))
app.use('/autores', user);

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});