import {userInfo, userName, userAge, Person} from './App.js'

let info = userInfo()
console.log(info);
console.log(userName);
console.log(userAge);

let p1 = new Person('001', 'Paul', 23)
        p1.id = 12 // Prop Mutation
        p1.name = 'Kola'

        let info1 = p1.getInfo()
        console.log(info1);

        let p2 = new Person('002', 'James', 30)
        let info2 = p2.getInfo()
        console.log(info2);