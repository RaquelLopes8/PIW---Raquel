var http = require('http');
var app = require('./config/express')();
var db = require('./config/database');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Servidor rodando');
});
db('mongodb://localhost/trabalhobackend');