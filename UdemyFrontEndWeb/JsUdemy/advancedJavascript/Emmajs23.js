// advanced functions (This is js at year 2018)
// we mostly use arrow functions to make functions
 
const first = () => {
    // This is a function inside a function
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second();
}

const newFunc = first();
newFunc();

// Closures : a function ran. the function provides executed It's never going to be ran
// BUT: it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope

// Currying
const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiply5 = curriedMultiply(5);

// so anytime you do multiply5(20) you get 100 in the console

// compose
const compose = (f,g) => (a) => f(g(a));
// Then this function
const sum = (num) => num + 1;

compose(sum , sum)(5);

//