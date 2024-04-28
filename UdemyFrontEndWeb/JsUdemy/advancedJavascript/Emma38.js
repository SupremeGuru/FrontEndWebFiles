// ES10 The .flatMap() method
// The flatMap() method is the addition of flat and map function
// It helps to flatten and also iterate an array at the same time
const jurassicPark = [['🦂','🦟'], '🦠','🐢'['🐍', '🦎'], [[[['🦖']]],'🦖'], ['🐙', '🦑']];
// Let's use .flatMap() to add trexes to all the animals
const jurassicParkChaos = jurassicPark.flatMap(creature => {
    return creature + '🦖';
})

// The .trimStart() and .trimEnd()
const userEmail1 = '            eddytheeagle@gmail.com';
const userEmail2 = 'jonnydangerous@gmail.com            ';
console.log(userEmail1.trimStart());
console.log(userEmail2.trimEnd());
// .trimStart() removes all the whitespaces at the beginning of the string
// .trimEnd() removes all the whitespaces at the end of the string
