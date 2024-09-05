let emojis = new Array('❤', '🍌', '🍕', '🍩', '🐮')

// Adding item to the end of the array using push() method
emojis.push('🦪')
console.log(emojis);
// Adding item to the beginning of the array usnig unshift() method
emojis.unshift('🍥')
console.log(emojis);

let popItem = emojis.pop()
console.log(popItem);   // This logs the item you popped from the list
let shiftItem = emojis.shift()
console.log(shiftItem); // This logs the item you shifted from the list

// Removing item from the end of an array with pop() method
emojis.pop()
console.log(emojis);
// Removing item from the beginning of an array with shift() method
emojis.shift()
console.log(emojis);

//Checking item index using indexOf
let emoIndex = emojis.indexOf('🍕')
console.log(emoIndex);
// To specify the index to start from
let emoIndex1 = emojis.indexOf('🍕', 3)
console.log(emoIndex1);
// NB:  if it returns -1 it means not found


//Checking item index using findIndex NB: This is a higher order method that needs a callback function
// come back later to it


// The includes method returns a boolean whether what you are searching for is there or not
let include = emojis.includes("❤", 12)
console.log(include);

// The splice() method is used to remove or add items from an array from a specific point
// if there are only two arguments it will remove items
// if there are two argment and what to add it will add

// splice() method removing
let color = ['White', 'Yellow', 'Blue', 'Green']
let newArr = color.splice(0, 3) // The first no. is where to start , the second no. is where to end 
console.log(newArr);console.log(color);

// splice() method adding
let color2 = ['White', 'Yellow', 'Blue', 'Green']
let newArr2 = color2.splice(1, 3, 'Pink' , 'Purple', 'Tan')
console.log(newArr2);
console.log(color2);


// The join method re
let joinRes = color.join('---')
console.log(joinRes);