const dbm = require('database')

const dbConfig = getBitcodeConfig('database')()
const db = dbm.createDbInstance(dbConfig)

function hello (params, request, response) {
  response.write('Hello, you sent me the following params: ' + JSON.stringify(params))
}

function helloDb (params, request, response) {
  response.json(db.select('select * from tabela'))
}

exports = {
  hello: hello,
  helloDb: helloDb
}
