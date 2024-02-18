    function printMultiplicationTable(start, end, number) {
    if (start > end) {
        console.log("Error: 'start' must be less than or equal to 'end'");
        return;
    }
    
    console.log(`Multiplication table for ${number} from ${start} to ${end}:`);
    
    for (let i = start; i <= end; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

// Example usage:
printMultiplicationTable(1, 10, 5); // Print multiplication table of 5 from 1 to 10