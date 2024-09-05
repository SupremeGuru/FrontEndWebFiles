let myDate = new Date()
console.log("\t" + myDate + "\n");
let date = myDate.getDate()
console.log("\t" + date + "\n");
let day = myDate.getDay();
console.log(day);
let month = myDate.getMonth()+1; // We added 1 for the current month because it starts to index from 0
console.log(month);
let year = myDate.getFullYear();
console.log(year);