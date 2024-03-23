/* Lesson 1 : 🪽
   accepting multiple generic types and with 'extends' keyword */
interface FlashLight3 {
  level : number;
  color : string; // although we would like to restrict values using enums
  mode : string; // blink | sparkle | consistent
}

/* @dev:::`U extends FlashLight3` somewhat kills the purpose of 
having it a generic type as now it has to be strictly of this 
type and so other way it could have been done is by specifying 
it into the parameters only with ': FlashLight3' */
const getLight = <T, U extends FlashLight3>
(torch : T, flashLight : U) : object => { 
    /* @dev:::instead of calling the return type as 'object', it 
    can rather be more precise by using interface for 
    defining this objects properties */
    return { torch, flashLight }
}

/* Lesson 2 : 🪽
   suppose we have defined two categories with their 
   characteristics these are 'groceries' and 'luxuries' 
   and now we want to create a class method named 'addToCart' 
   which adds these category products to the cart */
interface groceries {
  grocery : string;
}
interface luxuries {
  luxury : string;
}

/* BELOW TRANSITIONS TO UNCOMMENTED CODE */ 
// class Shopping {
//   public cart: string[] = [] // let ❌

//   addToCart(item : string) {
//     this.cart.push(item) // it needs this. (context)
//   }
// }
class Shopping<T, > {
  public cart: T[] = [] // let ❌

  addToCart(item : T) {
    this.cart.push(item) // it needs this. (context)
  }
}

let shopping = new Shopping()
/* CAREFUL: although its not defined anywhere that this 
class can handle only the grocery and luxury and so below 
will work too..

`javascript
shopping.addToCart({ grok : '' })
` */
shopping.addToCart({ grocery : '' })