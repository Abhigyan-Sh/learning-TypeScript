/* 'user' and 'verifyUser' are expected to be imported from other files */
const user = {}
const verifyUser = (user : object) => true

class Person6 {
  name : string
  private age : number
  private profession : string = Profession.MUSICIAN

  constructor(
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
  /* a getter function won't ever accept a param */
  get getAge () : number {
    /* since we didn't wanted anyone to read the 'age' of user 
    but now since we are making a function to read and return 
    user's age it means we must have intended to read the user's age 
    and return its value only after performing some verification and 
    so here goes the verification code which then returns age */
    if(verifyUser(user)) {
      return this.age
    }
    return 0
  }

  /* a setter function won't specify the return type */
  set setAge (_age : number) {
    this.age = _age
  }
}

let person6 = new Person6('pryansh', 23)
console.log(person6)


/* CONCEPT: another is the 'protected' keyword and 'inheritance' 
where now you can use it with context even like 'this.age' */