let myDob = new Date(2000, 3, 19)
console.log(myDob.toLocaleDateString());
console.log(myDob.toLocaleTimeString());
console.log(myDob.toJSON())

let letterDob = new Date("19 March 2000")
console.log(letterDob.toLocaleDateString());

let TimeStampDob = new Date(1233443234535);
console.log(TimeStampDob.toLocaleDateString())
