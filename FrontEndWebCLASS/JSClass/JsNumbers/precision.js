// In vscode try using console Ninja to view the output of this code easily
var x = 0.1 + 0.2; //NB: js precision is to decimal point 17
console.log(x);

/* Parsing string to integers there are two methods we can use
parseFloat()
parseInt()*/

console.log(parseInt("3.14"));
console.log(parseInt("50px"));
console.log(parseInt("1.6em"));
console.log(parseInt("124.5 lbs"));
console.log(parseInt("weight 124.5 lbs"));
console.log(parseInt("6.5 acres"));



console.log(parseFloat("3.14"));
console.log(parseFloat("50px"));
console.log(parseFloat("1.6em"));
console.log(parseFloat("124.5 lbs"));
console.log(parseFloat("weight 124.5 lbs"));
console.log(parseFloat("6.5 acres"));

// toString()
var x = 10;
var y = x.toString();
console.log(y);
console.log(typeof y);
console.log(typeof x);

console.log((12).toString());
console.log((15.6).toString());

// to base 2
console.log((6).toString(2));
// to base 16
console.log((255).toString(16));

// Formatting Numbers in Exponential Notation

var x = 67.1234;

console.log(x.toExponential());
console.log(x.toExponential(6));
console.log(x.toExponential(4));
console.log(x.toExponential(2));

// Formatting Numbers to Fixed Decimals

var x = 72.635;
console.log(x.toFixed());
console.log(x.toFixed(2));
console.log(x.toFixed(1));

var y = 6.25e+5;
console.log(y.toFixed(2));

var z = 1.58e-4;
console.log(z.toFixed(2));

// Formatting Numbers with precision

var x = 6.235;

console.log(x.toPrecision());
console.log(x.toPrecision());
console.log(x.toPrecision());
console.log(x.toPrecision());


// Finding the laarges t and smallest possible numbers

var a = Number.MAX_VALUE;
console.log(a);

var b = Number.MIN_VALUE;
console.log(b);

var x = Number.MAX_VALUE;
console.log(x);

var y= -1 