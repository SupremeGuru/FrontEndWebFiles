let timeIn= new Date().toDateString();
let Login = (timeIn , userName = 'john', password = '1234abcd',) =>{
    let Login = (userName = 'john') && (password = '1234abcd')? console.log(`Logged in Successfully at ${timeIn}`):console.log('Check your details');
}
Login(timeIn, 'john', '1234abcd');
Login(timeIn);