// Advanced loops
// The for in loop and for of loop
const basket = ['apples','oranges','grapes'];

for (item of basket){
    console.log(item);
}

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}
for (item in detailedBasket){
    console.log(item);
}
// NB: for of loop is for iterables(arrays, strings) and for in loop is for enumerables(objects)
// for of loop gives an error for looping through enumerables
// for in loop gives the index numbers for looping through iterables
// Though this things are old you still need to know what they do incase you see them in an old codebase
