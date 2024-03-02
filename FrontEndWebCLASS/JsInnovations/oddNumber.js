let oddNumber1 = parseInt(prompt("Your starting odd number: "));
let oddNumber2 = parseInt(prompt("Your stopping odd number: "));
if ((oddNumber1 % 2 === 1) && (oddNumber2 % 2 === 1)) {
    for (let index = oddNumber1; index < oddNumber2; index+=2) {
        var oddNumbersOutput = oddNumber1+=2
        document.write(`<p>Your odd numbers are ${oddNumbersOutput}\n</p>`);
    }
}else{
    alert("Put in an odd number in the two prompts \nThen restart the website: ");
}