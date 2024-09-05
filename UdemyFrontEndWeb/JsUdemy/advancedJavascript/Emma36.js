// Let's say we wanted to change all the keys in the object below from username0 to ID0
const obj = {
    userName0 : "Santa",
    userName1 : "Mr Emeka",
    userName2 : "Mr Kunle",
}
// This is udemy own

// Object.entries(obj).map(value =>{
//     return value[1] + value[0].replace("userName", " ");
// })


Object.entries(obj).map(value =>{
    console.log(value[1] + value[0].replace("userName", " ID"));
    return value[1] + value[0].replace("userName", " ID");
})

// Remember for .map(), .reduce() and .filter() we use return 