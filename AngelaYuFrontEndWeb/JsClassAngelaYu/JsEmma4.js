// We are learning about a function called slice
// Slice helps you to slice and dice your strings to separate them into indiviudual characters

var name = "Angela";
name.slice(0, 1); 

// My answer
var user_tweet = prompt("Compose your tweet: ");
var user_tweet2 = user_tweet.slice(0, 140);
alert('You have written ' + user_tweet2.length + ' characters, you have ' + (140 - user_tweet2.length) + ' characters left.')

// AngelaYu long answer
var user_tweet = prompt("Compose your tweet: ");
user_tweet.slice(0, 140);

// AngelaYu short answer
alert(prompt("Compose your tweet: ").slice(0, 140))