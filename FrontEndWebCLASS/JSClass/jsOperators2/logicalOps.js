//





let eligible = true
let required = false

console.log(!eligible);
console.log(!required);


console.log(!undefined); //true
console.log(!null);// true
console.log(!20);//false
console.log(!0);//true
console.log(!NaN);//true
console.log(!{});//false
console.log(!'OK');//false
console.log(!false);//true
console.log(!true);//false

// double Exclamation Mark
console.log(!!'OK');//true
console.log(!!false);//false
console.log(!!true);//true

// Double Ampersand && (AND) operator
let isMarried = true
let isDivorced = true
let isEngaged = false

let result = isMarried && isDivorced && isEngaged
console.log(result);

/// Bits Short Circuiting
let isApproved = true
let res1 = isApproved && console.log('Hello World');
console.log(res1);

// || (logical OR)
let isMarried2 = false
let isDivorced2 = false
let isEngaged2 = true

let result2 = isMarried2 || isDivorced2 || isEngaged2
console.log(result2);

// Bits Short Circuiting
let isApproved2 = false
let res2 = isApproved2 || !console.log('Hello World');
console.log(res1);

//order of  precedence
// 1. Not (!)
// 2. AND (&&)
// 3. OR (||)