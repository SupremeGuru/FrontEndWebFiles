// ES8 We have .padStart(), .padEnd()
'Turtle'.padStart(10);
'Turtle'.padEnd(10);

// We also have the ability to add an ending comma to lists
const fun = (a,b,c,d,) => {
    console.log(a);
}
// if we now do
fun(a,b,c,d,);
// with the extra comma we won't get an error

// We also have Object.entries;Object.values;
// We used to use Object.keys to iterate over objects like this
const obj = {
    userName0 : "Santa",
    userName1 : "Mr Emeka",
    userName2 : "Mr Kunle",
}
Object.keys(obj).forEach((keys, index) =>{
    console.log(keys, obj[keys]);
})// like this

// but now it's a lot easier
Object.values(obj).forEach(values =>{
    console.log(values);
})
// with values it prints Santa, Mr Emeka, Mr Kunle directly

// But even better with entries the key and value pair is synced into an array in which we can 
// work with, with all those array functions
Object.entries(obj).forEach(values =>{
    console.log(values);
})

// Now let's try a real life scenario Emma36.js




// But there's a big ES8 feature which is Async and await so find a video on it 