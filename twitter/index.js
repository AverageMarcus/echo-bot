"use strict";
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}); 

const stream = client.stream('statuses/filter', {track: process.env.TWITTER_SCREEN_NAME});
stream.on('data', tweet => {
  let tweetMessage = tweet.text.replace(process.env.TWITTER_SCREEN_NAME, `@${tweet.user.screen_name}`);
  client.post('statuses/update', {status: tweetMessage}, (error, myTweet, response) => {
    if (error) {
      console.log(error);
    }
  });
});
