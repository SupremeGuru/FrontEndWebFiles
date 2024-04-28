// now for nested objects we are going to use JSON
let obj = {
    a: "a",
    b: "b",
    c: {deep: "try and copy me"},
}
let clone = Object.assign({}, obj); // This doesn't work 
let clone2 = {...obj};
obj.c.deep = "hahaha you couldn't copy me";

console.log(obj);
console.log(clone);
console.log(clone2);
// but with json 
let superClone = JSON.parse(JSON.stringify(obj));
// so if we do
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone); // You will see "try and copy me"
// NB: JSON.parse(JSON.stringify(obj)); will cause performance implications on massive objects so find a better way to do it 
// so Google then understand deep cloning and shallow cloning
