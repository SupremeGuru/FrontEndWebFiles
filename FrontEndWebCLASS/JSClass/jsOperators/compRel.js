let num1 = 10;
let num2 = '10';
let res = num1 == num2; //This will (==) only check if they are equal and not their data types
console.log(res);

let num3 = 10;
let num4 = '10';
let res2 = num3 != num4; //This will (!=) only check if they are not equal and not their data types
console.log(res);

let f_num = 12; 
let s_num = 16;
let my_res = f_num === s_num; //This will (===) check whether their value are equal and their types are equal
console.log(my_res); // NB: All this checking is done by the process called autocasting

var x = 25;
var y = 35;
var z = "25";

alert(x<y);
alert(x>y);
alert(x<=y);
alert(x>=y);

// NB: alert in future details will not show you the output and will not show you the error if there is an error but console will show you the error so you can fix it and produce output
console.log(x < y); x = 24,23,22.5
console.log(x > y); x = 26, 27, 28
console.log(x <= y); x = 25
console.log(x >= y); x = 25, 26 , 27, 28


