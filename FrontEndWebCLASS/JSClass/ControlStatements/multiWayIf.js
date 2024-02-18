// Any way if statement
/* Syntax for if statement
if(<boolean expression>){
    js code
}
else if{
    js code
}
else if{
    js code
}
 else{
    show if all other if statement is false
    js code
} 
NB:The boolean expressions of either of the else if or if must be true for it to work but if it is not true the else{} part will work
*/

let day = prompt("Please Enter A day of the week? ").toLowerCase()

if (day.toLowerCase === 'monday') {
    console.log("Go to work");
}
else if(day.toLowerCase === "tuesday"){
    console.log("Go to Class");
}
else if(day.toLowerCase === "wednesday"){
    console.log("Go to work");
}
else if(day.toLowerCase === "thursday"){
    console.log("Go to Class");
}
else if(day.toLowerCase === "friday"){
    console.log("Go to work");
}
else if(day.toLowerCase === "saturday"){
    console.log("Stay at home");
}
else if(day.toLowerCase === "sunday"){
    console.log("Go to Church");
}
else{
    console.log("Please enter a day");
    alert(day);
}