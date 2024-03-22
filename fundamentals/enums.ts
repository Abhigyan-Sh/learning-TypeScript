/* difference between 'type' and 'enum'

# type

type point = {
  x : number; 
  y : number; 
  z : number; 
}

# enum

enum Direction {
  TOP = 'top', 
  RIGHT = 'right', 
  BOTTOM = 'bottom', 
  LEFT = 'left', 
} 

it can be observed that while
- 'type' is being used to create a new custom 
data_type, 
- 'enum' is being used for restricting the values which 
a variable can posses */

enum Direction {
  TOP, // default value is 0
  RIGHT, // default value is 1
  BOTTOM, // default value is 2
  LEFT, // default value is 3
}

const direction = Direction.TOP

// interesting enough to know, 
enum Direction2 {
  TOP, // default value is 0
  RIGHT = 30, // new value is 30
  BOTTOM, // default value is 31
  LEFT, // default value is 32
}

/* when we write, 
`javascript
  const direction = Direction.TOP
`
it produces a lot of code and so If I would have just placed 
'const' keyword before enum like

`javascript
  const enum Direction {..}
`
it reduces the lines of code drastically to just one single line for 
`javascript
  const direction = Direction.TOP
`
*/