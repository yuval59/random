import { VectorN } from '../classes/vector'
import { getMulberry32 } from '../useful-math'

const dimensionsToTest = 100
const magnitudeToTest = 1
const randFunction = getMulberry32(128)
const pairsToCheck = 50000

let avgSum = 0

for (let i = 0; i < pairsToCheck; i++) {
  const a = VectorN.random(dimensionsToTest, magnitudeToTest, randFunction)
  const b = VectorN.random(dimensionsToTest, magnitudeToTest, randFunction)

  const dist = VectorN.getDistance(a, b)
  avgSum += dist / pairsToCheck

  console.log(`Current average: ${(avgSum * pairsToCheck) / (i + 1)}`)
}

console.log(`Final average: ${avgSum}`)
