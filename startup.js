const server = require('http')
const router = require('router')

const port = env('THRUST_PORT', 8778);
server.createServer(port, router)
