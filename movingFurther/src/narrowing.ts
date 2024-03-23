/* Narrowing in TS
  In JS, 
  `javascript
  typeof null // output : object
  typeof [] // output : object
  `
  and hence we need to be very specific about the type since 
  TS is strictly about TypeSafety and so this behavior of JS 
  needs to be eradicated and this is what narrowing is. */


// 1) BEST PRACTICES: consider 'null' type for params when required
const provideID = (id : string | null) : number => 124

/* 2) checking 'typeof' for built-in data_types 

(using 'typeof') */
const printAll = (str : string | string[] | null) => {
  if(str) { // so its definitely not null
    if(typeof str == 'object') { // i.e. str === []
      // do something
    } else if(typeof str == 'string') {
      // do something
    }
  }
}

/* 3) how to check type of for interfaces ? 

(using 'in') */
interface Admin {
  _id : number;
  name : string;
  level : number;
  privileges : string;
}
interface GeneralUser {
  _id : number;
  name : string;
  level : number;
}

const isAdmin = (user : Admin | GeneralUser) : boolean => {
  if('privileges' in user) // 'in' for checking type of interface
    return true
  return false
}

/* 4) how to check for type of for objects of classes 
which have been formed using the 'new' keyword ?

(using 'instanceof') */
const isDate = (date : string | Date | null) : void => {
  if(date) {
    if(date instanceof Date) {
      console.log(date.toUTCString())
    } else 
      console.log('string')
  } else 
    console.log('null')
}

isDate(new Date())

/* 5) TYPE PREDICATES i.e. how to check for type of 'type' ?

(using isFish()) */
type Fish = {
  swim : string;
}

type Bird = {
  fly : string;
}

const isFish = (creature : Fish | Bird) : creature is Fish => { // boolean ❌, creature is Fish ✅
  // first typecast creature as Fish and then try on the method Fish has
  return (creature as Fish).swim !== undefined
}

const getCreaturesFood = (creature : Fish | Bird) : void => {
  if(isFish(creature)) {
    console.log('fish food')
  } else {
    console.log('bird food')
  }
}

getCreaturesFood({ fly : '' })


/* 6) DISCRIMINATED UNION: i.e. having a property which differentiates
all different kinds of 'interfaces' or 'type'.

Earlier we used a function 'isFish()' and that would be really a pro 
coder method of doing this but here exists another way which is easier 
for all programmers to understand.

(using a prop and named it 'kind') */
interface Circle {
  kind : 'circle'; /* here instead of a type (built-in), 
  I'm hardcoding and expect this value only */ 
  radius : number;
}

interface Square {
  kind : 'square';
  side : number;
}

interface Rectangle {
  kind : 'rectangle';
  length : number;
  width : number;
}

type Shape = Circle | Square
// type Shape = Circle | Square | Rectangle

const getArea = (shape : Shape) : number => {
  /* Could have used the pro-coder method isFish() for 
    detecting 'type' (I know its interfaces here but 
    consider taking liberty of that if these geometric 
    shapes were declared 'type' instead of 'interface'
    and well in case of interface we could have used 'in'
    but even if we didn't knew all this we can make a 
    discriminatory property like 'kind') */

  // 'switch' and 'case' could also have been used instead of if, else
  if(shape.kind === 'circle') 
    return Math.PI * shape.radius ** 2 
  else if(shape.kind === 'square') 
    return shape.side * shape.side
  // else if(shape.kind === 'rectangle') 
  //   return shape.length * shape.width
  else {
    /* Handled Gracefully: If code expands further introducing more 
      geometric shapes, like 'Rectangle' then the 'else {..' is going 
      to execute and yell at us and thus we get informed by TS that 
      we need to handle this new shape too. Its because the code 
      written there in 'else {...' is contradictory (smart move) */
    const _neverType : never = shape
    return _neverType
  }
}