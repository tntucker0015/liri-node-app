require("dotenv").config();


var client = new Twitter(keys.twitter);

// twitter call api
var Twitter = require('twitter'); 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// Node-spotify-api
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);  
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
console.log(data); 
});

// omdb api
var omdb = new omdb(keys.omdb)
var movie;
var request = require('request');
request('http://www.omdbapi.com/?apikey=544c20f9?t=bull+durham', function (response) {
  console.log(response);
});