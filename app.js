class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

class Employee extends Person {

    constructor(name, age, empNumber) {
        super(name, age);
        this.empNumber = empNumber;
    }

    workWork() {
        console.log(`Work work! I am employee number: ${this.empNumber}`);
    }
}

const scott = new Employee('Scott', 36, 12345);
scott.sayHi();
scott.workWork();