// Below is an ES6 approach to create an object
let student = {
    stuName : 'Peace',
    stuAge : 23,
    isStatus : true
};
let res = typeof(student);
console.log(res);

console.log(student.stuName);
console.log(student.stuAge);

// Below is the ES5 approach to create an object
let myObj = new Object()
myObj.name = 'Paul'
myObj.age = 45
let res2 = typeof myObj
console.log(myObj.name);