function sing(){
    console.log("Ahhhhhhhhhhhhh");
    console.log("TEEEEEEEEEEEEE");
}

sing(); 

function sing2(){
    console.log("Laaaa Deeeee");
    console.log("Daaaaaaaaaaa");
}

sing2(); 

//But we can make things efficient with arguments
function sing3(song) {
    console.log(song);
}

sing3("Laaaa deeee daaaaa");
sing3("hellllllooooooo");
sing3(" backstreets back alright");

// We can still do one other thing with functions
function multiply(a, b) {
    a * b; // This will give you an error (undefined) because it doesn't have a return statement

}// With return statement
multiply(5, 10);
function multiply2(c, d) {
    return c * d;
}
console.log(multiply2(5, 10));