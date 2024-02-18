// Js Loops
var toDoList = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for (let index = 0; index < toDoList.length; index++) {
    console.log(index);
    
}

for (let index = 0; index < toDoList.length; index++) {
    console.log(toDoList[index]);
    
}

for (let index = 0; index < toDoList.length; index++) {
    console.log(toDoList[index] + "!"); 
    // We haven't actually changed the variable toDoList
}

for (let index = 0; index < toDoList.length; index++) {
    toDoList[index] = toDoList[index] + "!";
    
}