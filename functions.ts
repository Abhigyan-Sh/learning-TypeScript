// traditional declaration of a function
function addTwo(num : number) : number {
  return num + 2
}
// arrow function with default values for params (num : number = 5)
const addThree = (num : number = 5) : number => {
  return num + 3
}
// functions which don't return anything (: void)
const randomFunction = (error : object) : void => {
  // some code execution which doesn't return anything
}
console.log(addTwo(4))

/* BEST PRACTICE: how to declare a map ? 
here as the content of array is deciphered by itself i.e. 
its found that whether its a string or a number or whatever 
and so we need not to define the data_type rather  only the 
later 'return part' data_type needs to be judged */
['abhigyan', 'pryansh', ''].map(
  (people) : string => (
    `naming: ${people}`
  )
)

/* for functions which don't return anything like 
functions which throw errors, or which could terminate 
in middle of execution, we use ': never' return type */

/* WRONG DECLARATION: here this would give errors ❌
const consoleError = (error : object = { message : 'some error !' }) : never => {
  throw new Error(error.message)
} */

/* CORRECT DECLARATION: ✅ */
interface CustomError {
  message: string
}

const consoleError = (error : CustomError = { message : 'some error !' }) : never => {
  throw new Error(error.message)
}

// OR

const consoleError2 = (error : { message : string } = { message : 'some error !'}) : never => {
  throw new Error((error as { message : string }).message)
}