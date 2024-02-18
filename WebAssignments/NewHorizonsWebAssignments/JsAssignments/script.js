console.log("This is a program that multiplies a number and takes an input \n and asks where to start and where to end");
var userInputNumber = parseInt(prompt("Type in the number you want to multiply: "));
var userInputStart = parseInt(prompt("Type in where you want to start(e.g 2 * 2): "));
var userInputEnd = parseInt(prompt("Type in where you want to end (e.g 2 * 12): "));
for (i=userInputStart; i <= userInputEnd; i++){
    /*console.log(userInputNumber + " x " + i + ' = ' + userInputNumber*i);*/
    console.log(`${userInputNumber}  x  ${i} = ${userInputNumber*i}`);}
