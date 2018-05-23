var dbm = require('database')

var dbConfig = getBitcodeConfig('database')()
var db = dbm.createDbInstance(dbConfig)

function hello (params, request, response) {
  response.write('Hello, you sent me the following params: ' + JSON.stringify(params))
}

function helloDb (params, request, response) {
  response.write(db.select('select * from tabela'))
}

exports = {
  hello: hello,
  helloDb: helloDb
}
