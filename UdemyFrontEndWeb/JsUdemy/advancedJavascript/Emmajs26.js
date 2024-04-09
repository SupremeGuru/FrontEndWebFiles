// Advanced Arrays
// We are doing the reduce method
// Normally to create an array and print it with using forEach we do
// const array = [2, 4, 6, 8];
// array.forEach((num) =>{
//     console.log(num);
// })
// But now we use mostly map, filter , reduce to work on arrays in real life
// so now we want to use forEach first to add all the elements in the array starting from zero 
// (We can also start from any number we like); then use reduce to make it easier

const array = [1, 2, 4, 6, 10];
const double = [];
const newArray = array.forEach((num)=> {
    double.push(0 + num);
})
console.log('forEach', double);
const reduceArray  = array.reduce((accumulator, num/*NB:You can remove this brackets only if it is one parameter*/)=>{
    // accumulator is the parameter that defines where we start from
    return accumulator + num;
}, /*This is the accumulator(because it is accumulating you get)*/ 0 )
console.log('reduce', reduceArray);

// We can also use all these on strings



//with forEach you need .push or .pop and a new array to put all those values but with reduce it instantly does all that for you 
// as long as you use the return statement or else you get undefined in all your values