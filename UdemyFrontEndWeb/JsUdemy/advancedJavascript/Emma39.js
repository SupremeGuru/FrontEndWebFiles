// ES10 The .fromEntries()
// This changes a nested array into an object
const userProfiles= [['commanderTom', 23], ['derekZlander', 40], ['Hansel', 18]]
Object.fromEntries(userProfiles);
// NB: Object.entries() does the opposite it turns an array into an object e.g
const obj = Object.fromEntries(userProfiles);
Object.entries(obj);// At this point obj is an array like userProfiles

// We also have the try catch block
try{
    true + 'hi';
}catch{
    console.log('You messed up');
}
// It essentially helps us to catch errors in our code and print out a proposed error by us 
// Here is an example that catches an error
try{
1 / 0
}catch{
    console.log('You did sth wrong');
}
// Now with the error parameter we get the js error standard message
try {
    1/0
} catch (error) {
    console.log('You did sth wrong');
}