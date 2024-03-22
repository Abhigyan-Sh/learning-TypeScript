const sampleObject = (
  { name, amount } : { name: string, amount: number }
) : number => {
  return amount * 3
}
console.log(
  sampleObject({ name: 'abhigyan', amount: 43 })
)

const sampleObject2 = (
  { name, amount } : { name: string, amount: number }
) : number => {
  return amount * 6
}

const sampleObject3 = (
  userObj : { name: string, amount: number }
) : number => {
  return userObj.amount * 6
}

/* below one should give an error and it does ❌ */
// sampleObject2({ name: 'abhigyan', amount: 30, payTo: 'pryansh' })

/* but now it doesn't give an error while it should 🤔 */
// const sampleObj = { name: 'abhigyan', amount: 30, payTo: 'pryansh' }
// sampleObject2(sampleObj)

export {}