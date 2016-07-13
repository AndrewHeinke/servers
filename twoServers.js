// Using the previous example as a guide, create an app that has two web servers.
// * One that listens on port 7000 and one that listens on port 7500.
// * The one listening on port 7000 will always tell the user something good about themselves.
// * The one listening on 7500 will always tell the user something bad about themselves.
// * Make sure you create a Github repo and commit this code!
// ** Bonus **
// * Generate the good / bad phrase randomly from a list of predefined phrases
// * Use the `twitter` package inside the response to also return a random tweet!
var http = require('http');
var Twitter = require('twitter');
var keys = require('./keys.js');
var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

var PORT=7000;
var PORT2=7500;
function handleRequest(request, response){
    response.end('I\'m a JavaScript God bruh! ' + request.url);
}
function handleRequestTwo(request, response){
    response.end('You\'re the worst! ' + request.url);
}
var server = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequestTwo);

server.listen(PORT, function(){
    console.log("You are the greatest ever! Server listening on: http://localhost:%s", PORT);
});
serverTwo.listen(PORT2, function(){
    console.log("You are ugly and I hate you! Server listening on: http://localhost:%s", PORT2);
});
