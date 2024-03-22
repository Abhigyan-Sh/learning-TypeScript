/* here we used ': string' which is 'type' but even if 
we don't its still going to work same */
let greetings: string = 'john doe'

/* ❌ and now if you reassign it to other dataType like 
a number it would throw an error */
// greetings = 3

/* ✅ and now, as its a string, so if I place a '.' to the 
variableName like 'greetings.' then it would suggest me all 
string methods I can make use of */
// greetings.replace()

console.log(greetings)

/* BEST PRACTICES */ 
let marks = 75.5 /* here we didn't defined the 'type' since if 
I try to do sth like marks = "", it would show me squiggly lines */
console.log(marks)