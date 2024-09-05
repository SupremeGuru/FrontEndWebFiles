let countries = Array(5)
countries.push("Canada");
countries.push("Australia");
countries.push("Japan");
countries.push("France");
countries.push("America");
console.log(countries);

let iterArr= countries.entries()
console.log(iterArr.next().value);
console.log(iterArr.next().value);console.log(iterArr.next().value);console.log(iterArr.next().value);console.log(iterArr.next().value);

let numbers = [12, 23, 45, 78, 90, 46, 12, 89];
let isEven = (element, index, arr)=>{
    return element % 2 === 0
}

let result = numbers.every(isEven)
console.log(result);
