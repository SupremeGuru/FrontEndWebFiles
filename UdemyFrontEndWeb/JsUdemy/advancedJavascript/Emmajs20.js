function isUserValid(bool) {
    return bool;
}

let answer = isUserValid(true) ? "You may enter" : "Access Denied";
// ternary Operators

let automatedAnswer = 
    "Your account # is " + (isUserValid(false) ? 1234 : "not available");

/* // So this is no different from the code below
function condition(){
    if (isUserValid(true)){
        return "Your account # is 1234"
    }else{
        return "Your account # is not available"
    }
}
// But it is easier to use ternary operators for conditions with only two possibilieties than an if statement
*/
