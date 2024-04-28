// Pass by value
let a = 5;
let b = a;

b++;
console.log(a, "now a doesn't change");
console.log(b, "only b");
console.log("This is because of pass by value");

// Pass by Reference
let obj1 = {
    name : "Yao",
    password: "1234"
}
let obj2 = obj1;
// Now if we do anything to obj2 it affects obj1 
// Because they are referencing the same thing
obj2.password = "easyPeasy";
console.log(obj1, "Obj1 changes");
console.log(obj2, "Obj2 also changes");
// It also works on arrays
let c = [1, 2, 3, 4, 5];
let d = c; // If we do 
d.push(123456);
console.log(d, "This is array d");
console.log(c, "This is array c");// You can see that c and d has changed
// Now at a reference we can change the main reference to avoid changing the main reference there are many ways but first
let e = [3, 5, 6, 8, 9];
let f = [].concat(e);
f.push(89019);
console.log(e, "This is array e");
console.log(f, "This is array f");// Now f changes but e doesn't change 
// because concat copies everything in the e array into the f array 
// then f.push(89019) put the value in
// Object are a little bit difficult go to Emmajs31.js
