let evenNumber1 = parseInt(prompt("Your starting even number: "));
let evenNumber2 = parseInt(prompt("Your stopping even number: "));
if ((evenNumber1 % 2 === 0) && (evenNumber2 % 2 === 0)) {
    for (let index = evenNumber1; index < evenNumber2; index+=2) {
        var evenNumbersOutput = evenNumber1+=2
        document.write(`<p>Your even numbers are ${evenNumbersOutput}\n</p>`);
    }
}else{
    alert("Put in an even number in the two prompts \nThen restart the website: ");
}