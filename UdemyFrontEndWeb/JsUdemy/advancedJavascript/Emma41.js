// Debugging
// To debug you need to know what your code is doing from line by line, to left and right
// One way to debug normally in any code is to try to print out the variables,parameters or in general objects as you understand the code
// Then later remove the unneccassary code e.g
const flattened = [[0,1], [2,3], [4,5]].reduce(
    (a,b)=> a.concat(b), []);// Now this is the code we want to understand
// We can first take it to our terms
const flattened1 = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => accumulator.concat(array), []);

// Then we can add the log statements to see how the array change over time
const flattened2 = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array)=>{
    console.log('accumulator', accumulator);
    console.log('array', array);
    return accumulator.concat(array)
    }, []);

// But the way to do it in js is by using the debugger keyword
const flattened3 = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array)
    }, []
);

// NB: To always remove debugger keyword before deployment
