var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);



// Set up your search parameters
var params = {
  q: '#findom',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

function respond (){
  // Initiate your search using the above paramaters
  T.get('search/tweets', params, function(err, data, response) {
    // If there is no error, proceed
    if(!err){
      // Loop through the returned tweets
      for(let i = 0; i < data.statuses.length; i++){

        // Get the tweet Id from the returned data
        let id = { id: data.statuses[i].id_str }
        // Try to Favorite the selected Tweet
        T.post('favorites/create', id, function(err, response){
          // If the favorite fails, log the error message
          if(err){
            console.log('error favoriting');
          }
          // If the favorite is successful, log the url of the tweet
          else{
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
          }
        });
        
        // T.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
         
        //   if (!error) {
        //     console.log(tweet);
        //   }
        //   else{
        //     let username = response.user.screen_name;
        //     let tweetId = response.id_str;
        //     console.log('retweeted: ', `https://twitter.com/${username}/status/${tweetId}`)
        //   }
        // });
          // If the favorite is successful, log the url of the tweet
          
        
      }
    } else {
      console.log(err);
    }
  })
}

function retweet (){
  // Initiate your search using the above paramaters
  T.get('search/tweets', params, function(err, data, response) {
    // If there is no error, proceed
    if(!err){
      // Loop through the returned tweets
      for(let i = 0; i < data.statuses.length; i++){

        // Get the tweet Id from the returned data
        let id = { id: data.statuses[i].id_str }
        // Try to rt the selected Tweet
        T.post('statuses/retweet/', id, function(err, response){
          // If the rt fails, log the error message
          if(err){
            console.log('retweet error');
          }
          // If the rt is successful, log the url of the tweet
          else{
            let username = response.user.screen_name;
            let tweetId = response.id_str;
            console.log('retweeted: ', `https://twitter.com/${username}/status/${tweetId}`)
          }
        });
        
        // T.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
         
        //   if (!error) {
        //     console.log(tweet);
        //   }
        //   else{
        //     let username = response.user.screen_name;
        //     let tweetId = response.id_str;
        //     console.log('retweeted: ', `https://twitter.com/${username}/status/${tweetId}`)
        //   }
        // });
          // If the favorite is successful, log the url of the tweet
          
        
      }
    } else {
      console.log(err);
    }
  })
}

setInterval(function(){
  retweet()}, 60000)
retweet();

setInterval(function(){
  respond()}, 60000)
respond();





// client.post('statuses/retweet/' + tweetId, function(error, tweet, response) {
//   if (!error) {
//     console.log(tweet);
//   }
// });


// let tweetid = { id: data.statuses[i].id_str }
//         T.post('statuses/retweet', tweetid, function(err, response){
//           // If the rt fails, log the error message
//           if(err){
//             console.log(err[0].message);
//           }
//           // If the rt is successful, log the url of the tweet
//           else{
//             let username = response.user.screen_name;
//             let tweetId = response.id_str;
//             console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
//           }
//         });