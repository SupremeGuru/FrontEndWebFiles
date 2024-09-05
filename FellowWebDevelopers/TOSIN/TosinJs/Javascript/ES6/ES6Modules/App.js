let userName = 'John Doe'
let userAge = 23

function userInfo() {
    return `UserName : ${userName}, UserAge : ${userAge}`
}

class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age
    }


    getInfo = function () {
        return `ID : ${this.id}, Name : ${this.name}, Age : ${this.age}`
    }
}

export {userInfo, userName, userAge, Person}