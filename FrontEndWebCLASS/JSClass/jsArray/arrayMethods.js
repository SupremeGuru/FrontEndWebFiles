// Array Methos are what allows us to manipulate an array
let names = ['Paul','Peter','John','James'];
let popItem = names.pop();  // This pops the last item from the list now we are going to also see the item it popped by assigning it to a variable
console.log(names);
console.log(popItem);  // This should give james

var pushItem = names.push('Kola', 'Bola');  //This adds new element to the end of the array NB: you can also multi add items to the end of the array
console.log(pushItem);
console.log(names);
let newArray = names.concat(['Titi', 'Chizzy']); // This Combines two or more arrays or returns a new array without modifying any existing arrays.
console.log(newArray);

let copyArray = names.copyWithin(1, 3);
console.log(copyArray);

let entrVal = newArray.entries();
console.log(entrVal);