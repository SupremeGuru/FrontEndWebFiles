// import { without } from "lodash";

// console.log(without);

var _ = require('lodash');

console.log(_);

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let setbackground = () => {
    document.getElementById("output").innerHTML=color1.value;
    document.getElementById("output2").innerHTML=color2.value;
}
color1.addEventListener("input", function(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value
    +")";
});

color2.addEventListener("input", function(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value
    +")";  
})