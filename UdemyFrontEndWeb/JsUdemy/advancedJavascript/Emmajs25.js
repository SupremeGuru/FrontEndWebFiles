// Advanced Arrays
// We are doing the filter method
// Normally to create an array and print it with using forEach we do
// const array = [2, 4, 6, 8];
// array.forEach((num) =>{
//     console.log(num);
// })
// But now we use mostly map, filter , reduce to work on arrays in real life
// so now we want to use forEach first to remove all the numbers lesser than five in the array then use filter to make it easier

const array = [1, 2, 4, 6, 10];
const double = [];
const newArray = array.forEach((num)=> {
    double.push(num > 5);
})
console.log('forEach', double);
const filterArray  = array.filter((num/*NB:You can remove this brackets only if it is one parameter*/)=>{
    return num > 5;
})
console.log('filter', filterArray);

// We can also use all these on strings

//with forEach you need .push or .pop and a new array to put all those values but with filter it instantly does all that for you 
// as long as you use the return statement or else you get undefined in all your values