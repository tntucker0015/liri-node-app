require("dotenv").config();


const input = process.argv;
const key = require('./keys.js');
const twitKeys = key.twitter;
const omdb = key.omdb.id;
const Twitter = require("twitter");
const twitterSearch = "input search";
const client = new Twitter(key.twitter);
const params = {
  q: twitterSearch,
  screen_name: 'uncpappabear',
  count: 10,
  exclude_replies: true,
  trim_user: true,
};

// Twitter search
// client.get('search/tweets', params, searchTweets);
// function searchTweets(error, data, response) {
//   for (var i = 0; i < data.statuses.length; i++) {
//     console.log("========================================");  
//     console.log(data.statuses[i].created_at);
//     console.log(data.statuses[i].text);
//   }
// };

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

// } else if (input [2] === "spotify-this-song") {
// // Node-spotify-api
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);  
// spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//   if (err) {
//     return console.log('Error occurred: ' + err);
//   }
// console.log(data); 
// });

// // omdb api
// } else if (input[2] === "movie-this") {
  // var request = require("request");
  // var movieArgs = input[3];
  // var movieName = '';
  // for (var i = 2; i < movieArgs.length; i++) {
  //   if (i > 2 && i < movieArgs.length) {
  //     movieName = movieName + "+" + movieArgs[i];
  //   } else {
  //     movieName += movieArgs[i];
  //   }
  // }
  
  // request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdb, function (error, response, body) {
  //     if (!error && response.statusCode === 200) {
  //       console.log("Title: " + JSON.parse(body).Title);
  //       console.log("Release Year: " + JSON.parse(body).Year);
  //       console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
  //       console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[1].Value);
  //       console.log("Country: " + JSON.parse(body).Country);
  //       console.log("Language: " + JSON.parse(body).Language);
  //       console.log("Plot: " + JSON.parse(body).Plot);
  //       console.log("Actors: " + JSON.parse(body).Actors);
  //     }
  //   });
  // } else if (input[2] === "do-what-it-says") {

  // };

