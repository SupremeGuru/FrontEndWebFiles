// For NOT Operator
let isEmployed = prompt("Are you employed (Type true or false): ");
let criminalRecord = false;

if (isEmployed === "true" && !(criminalRecord)){
    document.write("You are eligible for loan");
}else{
    document.write("You are not eligible for loan");
}