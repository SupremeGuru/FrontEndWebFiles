var userMoney = parseInt(prompt("Your money($): "));
function getMilk() {
    var numberOfBottles = Math.floor(userMoney / 1.5);
    alert(`buy ${numberOfBottles} bottles of milk`);
    var userBalance = userMoney - (numberOfBottles * 1.5);
    return document.write(`You have bought ${numberOfBottles} bottles \n Your change is ${userBalance}$`);
}
getMilk()