"use strict";
class Person5 {
    constructor(_name, _age, _profession) {
        this.profession = "developer" /* Profession.DEVELOPER */; // used internally within class
        this.name = _name;
        this.age = _age;
        if (_profession !== undefined) {
            this.profession = _profession;
        }
    }
}
let person5 = new Person5('pryansh', 24);
console.log('PERSON 5: ', person5);
// here comes the access specifier part
console.log(person5.name); // can be accessed ✅
// console.log(person5.age) // can't be accessed ❌
