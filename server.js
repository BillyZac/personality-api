var Express = require('express')

var app = Express()
var PORT = process.env.PORT || 3000

app.get('/', function(request, response) {
  console.log(request);
  response.send('hey')
})

app.listen(PORT, function() {
  console.log('Listening on ', PORT)
})
