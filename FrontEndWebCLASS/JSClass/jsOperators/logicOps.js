// Javascript Logical Operators
// The Logical operators are typically used to combine 

// Operator    Name    Example Result
// && And    x&& y   True if both x and y are true 
// || Or     x || y  True if either x or y is true
// !  Not      !x    True if x is not true

let name = "Paul" ;
let age = 12 ;

let res = (name === 'Paul') && (age === 12)//For AND operator both sides must be true before its output is true
console.log(res);

let res2 = (name === '') || (age === 12)//For OR operator only one side must be true before its output is true
console.log(res2);

let res3 = !(name === 'Paul')//For NOT operator it inverses the output of the expression
console.log(res3);

//NB: NOT operator is an unary operator which means it on one value at once

// A varible that is not assigned to a value will give an output of undefined