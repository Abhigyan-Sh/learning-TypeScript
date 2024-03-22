interface User {
  readonly _id: number; // readonly
  username: string;
  getPayment(): number; // function with no params
  emailId: string;
  pic?: string; // optional
  getCoupon(a: number, count: number): string// function with params
}

const newUser : User = {
  _id: 1234, 
  username: 'pryansh', 
  getPayment: () => 12, 
  emailId: 'pryansh@gmail.com', 
  getCoupon: (value, count) => (value + count).toString()
}

newUser.getPayment()

console.log(newUser)
console.log(newUser.getCoupon(2, 4))

/* RE-OPENING AN INTERFACE : with this 'likes' prop gets added to 
the User interface and so above initialization of newUser gives 
an error and says that we didn't included 'likes' prop

usually we won't be making these interfaces just anywhere 
in our files but rather these get imported from another file 
where they all are placed collectively */ 
interface User {
  likes: number;
}

const newUser2 : User = {
  _id: 1234, 
  username: 'pryansh', 
  getPayment: () => 12, 
  emailId: 'pryansh@gmail.com', 
  getCoupon: (value, count) => (value + count).toString(), 
  likes: 32, 
}

/* EXTENDING AN INTERFACE */
interface Developer {
  techStack: string;
  projects: string;
}

interface Person {
  skill: string;
  accomplishments: string;
  experience: number;
}

interface Employee extends Developer, Person {
  // define more props..
}

/* difference between 'interface' and 'type'
- RE-DECLARATION of 'interface' performs a union operation 
while with 'type' its not allowed

- TO EXTEND 'interface' we use 'extends' keyword 
while with 'type' we use '&' keyword */