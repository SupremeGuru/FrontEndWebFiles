let timeIn= new Date().toDateString();
function Login(timeIn , userName = 'john', password = '1234abcd',) {
    if (userName === 'john') {
        if (password === '1234abcd') {
            console.log(`Logged In Successfully at ${timeIn}`);

        } else {
            console.log("Check your details");

        }
    } else {
        console.log("Check your details");

    }
}
Login(timeIn, 'john', '1234abcd');
Login(timeIn);