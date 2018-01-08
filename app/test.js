function hello (params, request, response) {
  response.write("Hello, you sent me the following params: " + JSON.stringify(params))
}

exports = {
  hello: hello
}
