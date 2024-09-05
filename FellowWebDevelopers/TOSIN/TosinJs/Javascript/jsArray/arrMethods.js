// returns last item
let names = ['Paul', 'Peter', 'John', 'James']
let popItem = names.pop()
console.log(popItem.toUpperCase());

let pushItmes = names.push('Kola', 'Bola')
console.log(pushItmes)
console.log(names)

let newArr = names.concat(['Titi', 'Chizzy'])
console.log(newArr)

let copyArr = names.copyWithin(1,3)
console.log(copyArr);

let entrVal = names.entries()
console.log(entrVal);

names.every()