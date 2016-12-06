/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 
var app   = require('./app');
var debug = require('debug')('untitled:server');
var http  = require('http');

var port = 3020;
app.set('port', port);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


var server = http.createServer(app);

server.on("listening", onListening);


server.listen(port);