function calculateInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    var interest = (principal * rate * time) / 100;

    document.querySelector("#result").innerHTML = "Simple Interest: #" + interest.toFixed(2);
}

function clearResult() {
    document.getElementById('principal').value = "";
    document.getElementById('rate').value = "";
    document.getElementById('time').value = "";
    document.querySelector('#result').innerHTML = "";
}