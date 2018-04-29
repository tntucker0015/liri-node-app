require("dotenv").config();


const input = process.argv[2];
const userValue = process.argv[3];
const key = require('./keys.js');
const twitKeys = key.twitter;
const spotKeys = key.spotify
const omdb = key.omdb.id;
const Twitter = require("twitter");
const client = new Twitter(key.twitter);
const params = {
  q: userValue,
  screen_name: 'uncpappabear',
  count: 10,
  exclude_replies: true,
  trim_user: true,
};

switch (input) {
  case 'search-tweets':
// Twitter search
// +++++++++++++++++++++++++++++++++++++++++++++++

client.get('search/tweets', params, searchTweets);
function searchTweets(error, data, response) {
  for (var i = 0; i < data.statuses.length; i++) {
    console.log("========================================");  
    console.log(data.statuses[i].created_at);
    console.log(data.statuses[i].text);
  }
};
  break;
  case 'my-tweets':
// My Tweets
client.get('statuses/user_timeline', params, userTweets);
function userTweets(error, data, response) {
  for (var i = 0; i < data.length; i++) {
    console.log("========================================"); 
    console.log(params.screen_name);
    console.log(data[i].created_at);
    console.log(data[i].text);
  }
};
  break;
case 'spotify-this-song':
// // Node-spotify-api
// +++++++++++++++++++++++++++++++++++++++++++++++
// var info = response.tracks.items
var searchItem = input[3];
var Spotify = require('node-spotify-api');
var spotify = new Spotify(spotKeys);
var album = '';
spotify.search({
  type: 'track',
  query: userValue,
}, function (err, response) {
  album = response.tracks.items[0].album;
  track = response.tracks.items[0].name;
  artist = album.artists[0].name;
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
  console.log("========================================");
  console.log(track);
  console.log(artist);
  console.log(album.name);
  console.log(album.external_urls);
  console.log("========================================");
  
});
break;

case 'movie-this':
// // omdb api
// //+++++++++++++++++++++++++++++++++++++++++++++++
var request = require("request");
var movieArgs = input[3];
var movieName = '';
for (var i = 2; i < movieArgs.length; i++) {
  if (i > 2 && i < movieArgs.length) {
    movieName = movieName + "+" + movieArgs[i];
  } else {
    movieName += movieArgs[i];
  }
}

request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdb, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      // console.log(response);
      console.log("Title: " + JSON.parse(body).Title);
      // console.log("Release Year: " + JSON.parse(body).Year);
      // console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
      // console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value);
      // console.log("Country: " + JSON.parse(body).Country);
      // console.log("Language: " + JSON.parse(body).Language);
      // console.log("Plot: " + JSON.parse(body).Plot);
      // console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
break;
case 'do-what-it-says':
//"do-what-it-says") 

// };
break;
default:
}