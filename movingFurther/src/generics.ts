/* What are these ? 
  generics ensure that the type which comes in, gets out. */

function getList <Type> (val : Type) : Type {
  return val
}
// console.log(getList(3))

// shorthand
function getList2 <T> (val : T) : T {
  return val
}
// console.log(getList2(3))

// custom type
interface Chair {
  legs : number; // should be enum though
  color : string; // should be enum though
  type : string; // should be enum though
}

function getList3 <Chair> (val : Chair) : Chair {
  return val
}

console.log(getList3<Chair>({ 
  legs: 3, 
  color: 'midnight-black', 
  type: 'wooden',
}))

/* using with arrow function | 
why I see a ',' within generics in some codebases | 
how at places it can be sometimes having the param and return type different */
const getList4 = <T, >(products : Array<T>) : T => {
  // some operations..
  return products[1]
}
console.log(getList4([1, 2, 4]))