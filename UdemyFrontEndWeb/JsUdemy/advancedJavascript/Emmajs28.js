// Context
// context is what tells you where we are within an object
console.log(this);// If execute 👈 in the console. You get everything accessible in the window object
// NB: 'this' is a special keyword in javascript
// and if you do
console.log(this === window);// You get true
// and you can do
this.alert("I am using 'this' to print this");
//to get athr value for this we can use closure
const object4 = {
    a : function(){
        console.log(this);
    }
}
// NB: a functions type in js is objec just as an object's type is an object
// So therefore in the closure an object is in an object therefore this will give the context in the other object (which is a function)
