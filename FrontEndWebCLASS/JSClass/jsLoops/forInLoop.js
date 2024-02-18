let myItems = new Array(5);
myItems.push("Bag");
myItems.push("Shoes");
myItems.push("Belt");
myItems.push("Phone");
myItems.push("Cloth");
console.log(myItems);

for (let iter in myItems){
    console.log(myItems[iter]);
}

let ages = [12,45,20,45,56,97,34];
for (let iter in ages){
    console.log(ages[iter]);
}