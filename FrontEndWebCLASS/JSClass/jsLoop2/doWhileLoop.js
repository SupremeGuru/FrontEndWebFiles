// Syntax for do while loop

// <initializer>
// do{
    // js code
    // post operator
//}while(<Conditional statement>)


let i = 1;
do {
    console.log(i);
    i++
}while(i <= 10)

let message = 'Congratulations'
let index = 0
do{
    console.log(message[index]);
    index++
}while(index < message.length)