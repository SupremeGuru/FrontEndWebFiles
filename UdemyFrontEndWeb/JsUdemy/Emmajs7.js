var haveBankAccount = (prompt("Do you have a bank account(true or false): "));
var haveCryptoAccount = (prompt("Do you have a crypto account(true or false): "));

if (haveCryptoAccount === "true" || haveBankAccount === "true"){
    window.alert("You are eligible to pay");
}else {
    window.alert("You are not eligible to pay");
}