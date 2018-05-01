# liri-node-app
This is Node.js Homework, will takeuser input and display my 20 latest twitter feeds, a song from spotify or info from a movie on OMDB.


# Instructions
SetUP:
  First you must install the following NPM Packages.
   1. Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The            package.json file is required for installing third party npm packages and saving their version numbers.

  2. Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be          committed to Github.
        node_modules
        .DS_Store
        .env
  3. To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and OMDB APIs. You'll find       these Node packages crucial for your assignment.

        Twitter -- npm i twitter
        
        Node-Spotify-API -- npm i node-spotify-api
        
        Request -- npm i request
        
        DotEnv -- npm i dotenv
        
  4. Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:
        # Spotify API keys

        SPOTIFY_ID=your-spotify-id
        
        SPOTIFY_SECRET=your-spotify-secret

        # Twitter API keys

        TWITTER_CONSUMER_KEY=your-twitter-consumer-key
        
        TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
        
        TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
        
        TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
 
        --This file will be used by the dotenv package to set what are known as environment variables to the global process.env object           in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring           this file, they won't be pushed to github — keeping our API key information private.
        
        --If someone wanted to clone your app from github and run it themselves, they would need to supply their own .env file for it to           work.
        Get your Twitter API keys by following these steps:
                Step One: Visit https://apps.twitter.com/app/new
                Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback                   URL input. Then submit the form.
                Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret. 
                Copy and paste them into your .env file, replacing the your-twitter-consumer-key and your-twitter-consumer-secret                       placeholders.
                Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret. 
                Copy the access token key and secret displayed at the bottom of the next screen. Paste them into your .env file,                         replacing the placeholders for your-twitter-access-token-key and your-twitter-access-token-secret.
                
  # Run The Application
  From the Terminal in the root ddirectory
    Enter the following:
    
        To get a list of 10 of my latest tweets from @uncpappabear enter:
        
          'node liri.js my-tweets'
          
        To search for tweets using a specific word enter:
        
          'node liri.js search-tweets <your search word>'
          
                  example: node liri.js search-tweets durham
                  
        To search for specific song data including a url for Spotify enter:
        
          'node liri.js spotify-this-song <your-song>'
          
                  example: node liri.js spotify-this-song amazing-grace
                  
                        make sure to include '-' for any spaces of song title
                        
        To search for movie info of your fav movie enter:
        
          'node liri.js movie-this <movie-title>'
          
                  exapmle:  node liri.js movie-this the-matrix
                  
                        make sure to include '-' for any spaces of movie title
  
        
          
      
  
