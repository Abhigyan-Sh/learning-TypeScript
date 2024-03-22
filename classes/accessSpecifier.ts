class Person5 {
  public name : string // by default also its public only, so didn't made any change
  private age : number // used internally within class
  private profession : string = Profession.DEVELOPER // used internally within class

  constructor (
    _name : string, 
    _age : number, 
    _profession? : string
  ) {
    this.name = _name
    this.age = _age
    if(_profession !== undefined) {
      this.profession = _profession
    }
  }
}

let person5 = new Person5('pryansh', 24)
console.log('PERSON 5: ', person5)

// here comes the access specifier part
console.log(person5.name) // can be accessed ✅
// console.log(person5.age) // can't be accessed ❌
  