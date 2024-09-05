// Less than and less than equals

let fnum = 10
let snum = 12
let tnum = 14

// Less Than    <
let res = fnum < snum;
console.log(res);
// Less Than or Equals to   <=
let res2 = snum <= tnum;
console.log(res2);

// Greater Than     >
let res3 = fnum > snum
console.log(res3);

// Greater Than or Equal    >=
let res4 = snum >= tnum
console.log(res4);

let fname = 'John'
let lname = 'Peter'

// Equals Operator ==
let result = (fname == lname)
console.log(result);

// Equals Operator !=
let result1 = (fname != lname)
console.log(result1);

//////////IMPORTANT!!!!!!!!!!!!!!!
let a = '3'
let b = 3

let resrt = a == b      // This doesn't check the type of the variable when comparing
console.log(resrt); 
/// Strict Equals to (===)
let resrt1 = (a === b)  // This checks the type of the variables when comparing
console.log(resrt1);

/// Strict NotEqual to (!==)    
let resrt2 = (a !== b )     // This checks the type of the variables when comparing
console.log(resrt2);