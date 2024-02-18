var greet_user = prompt("Hi there your maximum tweet is 280 characters: ");
var maxGreetUserLength = 140;
var greetUserLength = greet_user.length;
var greetUserLengthLeft = maxGreetUserLength - greetUserLength;
var message = 'You have written ' + greetUserLength + ' characters, you have ' + greetUserLengthLeft + ' characters left.'
console.log(message);


//Angela Yu's Shortest answer
var user_tweet = prompt("Compose your tweet: ");
alert('You have written ' + user_tweet.length + ' characters, you have ' + (140 - user_tweet.length) + ' characters left.')