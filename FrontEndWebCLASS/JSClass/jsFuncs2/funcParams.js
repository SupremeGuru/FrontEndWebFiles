// The function is defined here with a parameter
function greetUser(userName) {
    console.log(`Hello ${userName}`);
}
greetUser("Kunle"); // The function is called here therefore, making it a method but a method must take an argument i.e "Kunle" 
greetUser("Nnamani");

function sumNums(fn, sn) {
    let res = fn + sn;
    return res
}

let sumRes = sumNums(12, 15);
console.log(sumRes);

let sumRes1 = sumNums(1, 5);
console.log(sumRes1);

let sumRes2 = sumNums();
console.log(sumRes2);