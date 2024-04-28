// To change a particular reference to a point
let obj = {
    a: "a",
    b: "b",
    c: "c",
}
// Now to clone it
let clone = Object.assign({}, obj);
// We can also do this with the spread operator
let clone2 = {...obj}; // ... is the spread operator. This {} tells js i.e an object not an array
obj.c = 5; // Now this changes c to 5 but it won't to the other clones
console.log(obj);
console.log(clone);
console.log(clone2);

// For arrays
let array = [2, 4, 6];
let arrayClone = Object.assign([], array);
let arrayClone2 = [...array];
array.pop();
console.log(array);
console.log(arrayClone);
console.log(arrayClone2);
// What about nested arrays or objects Emma32.js