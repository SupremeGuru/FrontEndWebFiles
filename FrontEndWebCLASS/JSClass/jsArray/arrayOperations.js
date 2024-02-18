let personalData = ['John', 24, true, 12345.87, 'Male'];

// Operations
console.log(personalData.length); // length operation counts no. of items in an array

// accessing array data
console.log(personalData[0]); // This uses index to access the values in an array
console.log(personalData.length - 5);  // This makes us to be able to use negative index
personalData[0] = 'Peter';  // This will change the value at index 0 to the one it is equals to 

console.log(personalData);  //Check whether john has now been changed to peter
