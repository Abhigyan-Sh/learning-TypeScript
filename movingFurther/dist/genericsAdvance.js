"use strict";
/* @dev:::`U extends FlashLight3` somewhat kills the purpose of
having it a generic type as now it has to be strictly of this
type and so other way it could have been done is by specifying
it into the parameters only with ': FlashLight3' */
const getLight = (torch, flashLight) => {
    /* @dev:::instead of calling the return type as 'object', it
    can rather be more precise by using interface for
    defining this objects properties */
    return { torch, flashLight };
};
/* BELOW TRANSITIONS TO UNCOMMENTED CODE */
// class Shopping {
//   public cart: string[] = [] // let ❌
//   addToCart(item : string) {
//     this.cart.push(item) // it needs this. (context)
//   }
// }
class Shopping {
    constructor() {
        this.cart = []; // let ❌
    }
    addToCart(item) {
        this.cart.push(item); // it needs this. (context)
    }
}
let shopping = new Shopping();
/* CAREFUL: although its not defined anywhere that this
class can handle only the grocery and luxury and so below
will work too..

`javascript
shopping.addToCart({ grok : '' })
` */
shopping.addToCart({ grocery: '' });
