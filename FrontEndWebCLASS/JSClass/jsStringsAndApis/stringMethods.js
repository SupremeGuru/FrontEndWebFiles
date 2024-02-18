let myText = 'This is my string texts'

// To count numbers of characters
let textCount = myText.length;
console.log(textCount);

// You can use the indexOf() method to find a substring or string within another string. This method returns the index or position of the first occurrence of a specified string within a string
var str = "If the facts don't fit the theory, change the facts.";
var pos = str.indexOf("facts");
console.log(pos);

var posStart = str.indexOf("facts", 10);
console.log(posStart);


var posEnd = str.indexOf("facts",9,12);
console.log(posEnd);

// YOu can use the search() method to search a particular piece of text or pattern inside a string.

// Like indexOf() method the search() method also returns the index of 

var str = "Color red looks brighter than color blue.";

// Case sensitive search
var pos1 = str.search("color")
console.log(pos1);

// Case insensitive search
var pos2 = str.search(/color/i);
console.log(pos2);

// You can use the slice() method to extract a part or substring from a string.

//This method to 

var str= "The quick brown fox jumps over the lazy dog.";
var subStr = str.slice(4);
console.log(subStr);

var subStr2 = str.slice(4, 15);
console.log(subStr2); 


// Negative index
let strVal = 'Johnson'
let res = strVal.slice(-3,6);
console.log(res);

// Javascript also provide the substr()  method which is similar to slice() with a subtle difference, the second parameter specifies the 

var str2 = "The quick brown fox jumps over the lazy dog.";
let subRes = str2.substr(-4, 5);
console.log(subRes);


let str3 = "Color red looks brighter than color blue.";
var result = str3.replace("color", "paint");
console.log(result);

// With Case insensitive
var str = "Color red looks brighter than color blue.";
var result2 = str.replace(/color/i , "paint");
console.log(result2);


var str = "Hello World!";
var result3 = str.toUpperCase();
console.log(result3);

var result4 = str.toLowerCase();
console.log(result4);


let message = "Hello Nigeria!!"
char_zero = message.charAt()
console.log(char_zero);

// Now we supply a character
char_three = message.charAt()
console.log(char_three);

// at 1:12:00 This way is better by using square brackets
let chat_four = message[4];
console.log(chat_four);

// The split() method
var fruitsStr = "Apple, Banana, Mango, Orange, Papaya";
var fruitsArr = fruitsStr.split(", ");
console.log(fruitsStr);
console.log(fruitsArr[4]);

