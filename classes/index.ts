/* BEST PRACTICE (declaring enum as const, reduces lines 
of code drastically in compiled JS) */
const enum Profession { 
  DEVELOPER = 'developer', 
  ARTIST = 'artist', 
  MUSICIAN = 'musician', 
}

/* CLASSES */

// DECLARING DEFAULT VALUES 1/2 WAYS 🪽
class Person {
  name : string
  age : number
  profession : string

  constructor (_name : string, _age : number) {
    this.name = _name
    this.age = _age
    this.profession = Profession.DEVELOPER
  }
}

let person = new Person('abhigyan', 26)
console.log('PERSON 1: ', person)

// DECLARING DEFAULT VALUES 2/2 WAYS 🪽
class Person2 {
  name : string
  age : number
  profession : string = Profession.DEVELOPER

  constructor (_name : string, _age : number) {
    this.name = _name
    this.age = _age
  }
}

let person2 = new Person2('abhigyan', 26)
console.log('PERSON 2: ', person2)

// DECLARING DEFAULT VALUES BUT WHICH CAN BE MODIFIED 🪽
class Person3 {
  name : string
  age : number
  profession : string

  constructor (
    _name : string,
    _age : number, 
    // OR put '?' and profession : string = Profession.DEVELOPER
    _profession: string = Profession.DEVELOPER 
  ) {
    this.name = _name
    this.age = _age
    this.profession = _profession
  }
}

let person3 = new Person3('abhigyan', 26, Profession.ARTIST)
let person4 = new Person3('abhigyan', 26)
console.log('PERSON 3, 4: ', person3, person4)