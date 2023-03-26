import { VectorN } from './classes/vector'

const dimensionsToTest = 2

const a = VectorN.random(dimensionsToTest)
const b = VectorN.random(dimensionsToTest)

console.log(VectorN.getDistance(a, b))
console.log(VectorN.getDistance(b, a))
