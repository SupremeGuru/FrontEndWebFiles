let personData = ['John', 24, true, 12345.87, 'Male']
let dtCount = personData.length

// counting items in array
console.log(dtCount)

// accesing array data
let dtname = personData[0]
console.log(dtname)

let dtgender = personData[personData.length - 1]
console.log(dtgender)

let dtsta = personData[personData.length - 3]
console.log(dtsta)

personData[0] = 'Peter'
console.log(personData);