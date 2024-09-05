// Array creation
// 1 , array symbol literal

let myItems = ['Shoe', 'Bag', 'Belt', 'Phone']

// 2, array constructor
let myVals = new Array(5)  // The no. 5 in the parentheses says that it only allows five items in the array
myVals.push(12)
myVals.push(1222);myVals.push(132);myVals.push(1562);myVals.push(172);

// still with array constructor
let arr = new Array('Paul', 'Peter', 'James', 'Matt')
console.log(myItems, " " , myVals);

// Also nested Arrays
let items = new Array(["Shoe", "Bag", "Belt", "Phone"])

// Empty Arrays
let user = new Array()
let numOfOranges = []