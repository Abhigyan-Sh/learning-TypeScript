"use strict";
/* What are these ?
  generics ensure that the type which comes in, gets out. */
function getList(val) {
    return val;
}
// console.log(getList(3))
// shorthand
function getList2(val) {
    return val;
}
function getList3(val) {
    return val;
}
console.log(getList3({
    legs: 3,
    color: 'midnight-black',
    type: 'wooden',
}));
/* using with arrow function |
why I see a ',' within generics in some codebases |
how at places it can be sometimes having the param and return type different */
const getList4 = (products) => {
    // some operations..
    return products[1];
};
console.log(getList4([1, 2, 4]));
