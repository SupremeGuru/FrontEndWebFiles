let currentDate = new Date()
let currentHours = currentDate.getHours()
if (currentHours>= 0 && currentHours <= 11 ) {
    console.log("Good Morning");
}
else if (currentHours >= 12 && currentHours <= 15 ){
    console.log("Good Afternon");
}
else if(currentHours >= 16 && currentHours <= 19){
    console.log("Good Evening");
}
else {
    console.log("Good Night");   
}