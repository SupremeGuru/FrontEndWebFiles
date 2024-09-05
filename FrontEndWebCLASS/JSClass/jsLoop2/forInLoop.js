// Syntax for for-in loop
// for<initializer>; <conditional statement>; <post OPS>



// for(let i in 10){
//     // console.log('I love JS');
//     // console.log(i);
//     console.log(`2 times ${i} is ${2*i}`);
//     document.write(`<h1>2 times ${i} is ${2*i}</h1>`)
// }

let ds = 'Congratulations'

for(let char in ds){
    console.log(ds[char]);
}
let myObj = {
    id : '123',
    name : 'John',
    age : 23
}
// Object Iteration
for(let val in myObj){
    console.log(myObj[val]);
}