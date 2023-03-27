import { VectorN } from './classes/vector'
import { getMulberry32 } from './useful-math'

const dimensionsToTest = 9500000
const magnitudeToTest = 1
const randFunction = getMulberry32(128)
const pairsToCheck = 50

for (let i = 0; i < pairsToCheck; i++) {
  const a = VectorN.random(dimensionsToTest, magnitudeToTest, randFunction)
  const b = VectorN.random(dimensionsToTest, magnitudeToTest, randFunction)

  console.log(VectorN.getDistance(a, b))
}
