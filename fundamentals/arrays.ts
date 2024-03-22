/* users array gets initialized with type 'never' and 
hence push() method will give an error */

// let users = []
// users.push('abhigyan', 'pryansh')

/* hence define it like below */

const users : string[] = []
users.push('abhigyan')

// OR
const person : Array<string> = []
users.push('abhigyan')