// Syntax for for-of loop
// for<initializer>; <conditional statement>; <post OPS>



// for(let i of 10){
//     // console.log('I love JS');
//     // console.log(i);
//     console.log(`2 times ${i} is ${2*i}`);
//     document.write(`<h1>2 times ${i} is ${2*i}</h1>`)
// }

let ds = 'Congratulations'

for(let char of ds){
    console.log(char);
}
let myObj = {
    id : '123',
    name : 'John',
    age : 23
}
// Object Iteration not allowed
// for(let val of myObj){
//     console.log(val);
// }