
// Now what if there are two return statements
multiply(5, 10);
function multiply2(c, d) {
    return c;
    return c * d; // Now c and d won't be executed because return statements once read exit the function instantly 
}
console.log(multiply2(5, 10)); // NB: return statements can still be written twice e.g in an if else statements

multiply(5, 10);
function multiply2(c, d) {
    if (c < 10 || d < 10) {
        return c * d;
    }else {
        return "That is too hard";
    }
}
console.log(multiply2(5, 10));
