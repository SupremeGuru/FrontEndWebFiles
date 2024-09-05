// ES2021 introduces three logical assignment operators including:

// Logical OR assignment operator (||=)
// The logical OR assignment operator (||=) accepts two operands
// and assigns the right operand to the left operand if the left operand is falsy:
// for falsy
let title;
// let res = Boolean(title);
// console.log(res);
title ||= 'untitled';
console.log(title)

// for truthy
let myCourse = 'Javascript'
myCourse ||= 'HTML'
console.log(myCourse); 

// Logical AND assignment operator (&&=)
// The logical AND assignment operator only assigns y to x if x is truthy:
// for falsy
let x;
 x &&= 'untitled';
 console.log(x);

 // for truthy
 let z = 1
 z &&= 'HTML'
 console.log(z);

// Nullish coalesing assignment operator (??=)
// The nullish  coalescing assignment operator only assigns y to x if x is null or undefined
// x ??= y; it is the same thing as x ?? (x=y);

let obj = {
    userName : null,
    age : 23,
}

let res2 = obj.userName ??= 'User 1'
console.log(obj);

obj.age ??= 24;
console.log(obj);


