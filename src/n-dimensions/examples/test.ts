import { VectorN } from '../classes/vector'
import { getMulberry32 } from '../useful-math'

// Testing the new get methods to clearly show the bug fixed
const c = new VectorN([0.5, 0.2])
console.log(c.Dimensions)
console.log(c.x)
console.log(c.y)
