/* Syntax for if statement
if(<boolean expression>){
    js code
} else{
    show if false
    js code
} 
NB:The boolean expression must be true for it to work but if it is not true the else{} part will work
*/

let isEngaged = false; //now for false it has an output because of else{}
if (isEngaged){
    console.log("she is engaged!!!");
    console.log("Yay let's plan her wedding");
}else{
    console.log("She is not engaged!!!");
}


let num = 30;

if (num > 20) {
    console.log(`${num} is greater than 20`);
}else{
    console.log(`${num} is lesser than 20`);
}