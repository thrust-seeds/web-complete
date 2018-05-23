var server = require('http')
var router = require('router')

var port = env('THRUST_PORT', 8778);
server.createServer(port, router)
