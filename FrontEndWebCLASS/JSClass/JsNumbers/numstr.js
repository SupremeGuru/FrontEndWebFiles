let fn = 10
let sn = 5
let tn = '4'
let fr = '12'
let tr = "y"

/* Adding a number with a number m the result will be the sum of the two numbers
plus (+)
1, it concatenates  NB: the + sign concatenates if it can before checking if it can add
2, it sums values
*/

let res1 = fn + sn
console.log(res1);

let res2 = fn + tn
console.log(res2);

let res3 = tn + tn
console.log(res3);

// minus unlike plus it has one behaviour only to subtract therefore when dealing with strings it will autocast or autoconvert them to float or integers
let res4 = fn - sn 
console.log(res4);

let res5 = tn - fr
console.log(res5);

let res6 = fn - fr 
console.log(res6);


/*multiplication (*)
to find product it also autocasts (autoconvert) strings to float or integers
*/

let res7 = tn * fr
console.log(res7);

let res8 = fn * fr 
console.log(res8);

/*Division (/) it also autocasts(autoconverts) strings to float or integers  
NB: NaN means not a number*/
let res9 = tn / fr
console.log(res9);

let res10 = fn / fr 
console.log(res10);

let res11 = fn / tr 
console.log(res11);