/* @dev:::readonly, optional and & */

// @dev:: readonly
type Developer = {
  readonly _id: number; // sth which I won't want any developer to 'modify' in code
  techStack: string;
  projects: string;
  numberOfProjects: number;
  languages: string;
  experience: number;
}

const getDeveloper = (developer : Developer) : Developer => {
  // developer._id = 324231 (readonly ❌)
  return developer
}

// @dev:: ?
const getUser = (
  { name, amount } : { name: string; amount?: number }
): string => {
  if(amount !== undefined) {
    console.log(amount)
  }
  return name
}

getUser({ name: 'abhigyan' })

// @dev:: &
type TypeA = {
  prop1: string;
  prop2: number;
  prop3: string;
}

type TypeB = {
  prop4: number;
  prop5: boolean;
}

type TypeC = TypeA & TypeB

const combinedValue : TypeC = {
  prop1: 'abhigyan',
  prop2: 32, 
  prop3: 'pryansh', 
  prop4: 43, 
  prop5: true
}

/* In this very context, if a prop conflicts for example 
prop1 being string in 'TypeA' while it being boolean in 
'TypeB', then prop1 acquires 'never' type */