var Express = require('express')
var personality = require('watson-personality')
var cors = require('cors')

var app = Express()
var PORT = process.env.PORT || 3000

app.use(cors())

app.get('/:twitter_user', function(request, response) {
  console.log('Looking up personality for:', request.params.twitter_user);

  personality(request.params.twitter_user)
    .then(function(personalityProfile) {
      response.send(personalityProfile)
    })
    .catch(function(error) {
      console.log(error)
    })
})

app.get('/', function(request, response) {
  response.send('ok')
})

app.listen(PORT, function() {
  console.log('Listening on ', PORT)
})
