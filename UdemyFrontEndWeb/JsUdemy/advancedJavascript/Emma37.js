// ES10 The flat() method
// This only works on nested arrays
const array = [1, [2,3], [4,5]];
array.flat()
// now we can specify how many levels we can flatten the array by putting a number inside the parentheses
const array1 = [
    [1, [2,3], [4,5]],
    [11, [12,13], [14,15]],
];
// NB: The default is one for just .flat()
array1.flat(3);

const jurassicPark = [['🦂','🦟'], '🦠','🐢'['🐍', '🦎'], [[[['🦖']]],'🦖'], ['🐙', '🦑']];
jurassicPark.flat(50);

// We can also use it to clean up our data e.g 
const entries = ['bob', 'sally',,,,,, 'cindy'];
entries.flat()