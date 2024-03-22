"use strict";
/* CLASSES */
// DECLARING DEFAULT VALUES 1/2 WAYS 🪽
class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        this.profession = "developer" /* Profession.DEVELOPER */;
    }
}
let person = new Person('abhigyan', 26);
console.log('PERSON 1: ', person);
// DECLARING DEFAULT VALUES 2/2 WAYS 🪽
class Person2 {
    constructor(_name, _age) {
        this.profession = "developer" /* Profession.DEVELOPER */;
        this.name = _name;
        this.age = _age;
    }
}
let person2 = new Person2('abhigyan', 26);
console.log('PERSON 2: ', person2);
// DECLARING DEFAULT VALUES BUT WHICH CAN BE MODIFIED 🪽
class Person3 {
    constructor(_name, _age, 
    // OR put '?' and profession : string = Profession.DEVELOPER
    _profession = "developer" /* Profession.DEVELOPER */) {
        this.name = _name;
        this.age = _age;
        this.profession = _profession;
    }
}
let person3 = new Person3('abhigyan', 26, "artist" /* Profession.ARTIST */);
let person4 = new Person3('abhigyan', 26);
console.log('PERSON 3, 4: ', person3, person4);
