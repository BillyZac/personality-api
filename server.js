var Express = require('express')
var personality = require('watson-personality')

var app = Express()
var PORT = process.env.PORT || 3000

app.get('/', function(request, response) {

  personality('@billyzacsmith')
    .then(function(personalityProfile) {
      console.log(personalityProfile)
      response.send(personalityProfile)
    })
    .catch(function(error) {
      console.log(error)
    })
})

app.listen(PORT, function() {
  console.log('Listening on ', PORT)
})
