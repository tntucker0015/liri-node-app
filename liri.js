require("dotenv").config();

//  pulls user input and stores it for picking which switch  to run.
const input = process.argv[2];
//  used for title or search value
const userValue = process.argv[3];
// pulls keys from .env file
const key = require('./keys.js');

const twitKeys = key.twitter;
const spotKeys = key.spotify
const omdb = key.omdb.id;
const Twitter = require("twitter");
const doWhatItSays = require('./random.txt');
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
    // // Twitter search - takes user input and produces 10 tweets-reults from twitter
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
    // My Tweets -takes the user input a reproduces 10 tweets from @uncpappabear
    client.get('statuses/user_timeline', params, userTweets);
// creates a loop to display 10 results of my tweets
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
    // Node-spotify-api
    // takes user input and searches spotify then displays reluts for user song
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(spotKeys);
    spotify.search({
      type: 'track',
      query: userValue
    }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      album = data.tracks.items[0].album;
      track = data.tracks.items[0].name;
      artist = album.artists[0].name;
      console.log("========================================");
      console.log(track);
      console.log(artist);
      console.log(album.name);
      console.log(album.external_urls);
      console.log("========================================");

    });
    break;
  case 'movie-this':
     // omdb api
    // takes user input and pulls movie info from OMDB
    var request = require("request");
    var movieName = userValue;
    request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdb, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
        console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
      }
    });
    break;
  case 'do-what-it-says':
  // if user leaves off song title or movie title it should play what is in random.txt
    if (userValue == '') {
      const Spotify = require('node-spotify-api');
      const spotify = new Spotify(spotKeys);
      spotify.search({
        type: 'track',
        query: doWhatItSays,
      }, function (err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        album = data.tracks.items[0].album;
        track = data.tracks.items[0].name;
        artist = album.artists[0].name;
        console.log("========================================");
        console.log(track);
        console.log(artist);
        console.log(album.name);
        console.log(album.external_urls);
        console.log("========================================");

      });
    };
    break;
  default:
}