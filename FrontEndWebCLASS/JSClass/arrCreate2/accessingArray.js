// The Arrays
let myItems = ['Shoe',12, true,{}, [], 'Bag', 'Belt', 'Phone']
let itemLength = myItems.length
console.log(itemLength);

// accessing the array: positive indexing 
// NB: All positive indexing for any thing you are accessing is zero 0
let myVals = new Array()
myVals.push(12);myVals.push(1222);myVals.push(132);myVals.push(1562);myVals.push(172);
let val = myVals[2]
console.log(val);

// Negative Indexing is not supported as of 8/8/2024
let val2 = myItems[-2]
console.log(val2);