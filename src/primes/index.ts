import naiveCalculator from './calculators/naive'
import optimizedNaive from './calculators/optimized-naive'
import optimizedSieveCalc from './calculators/optimized-sieve'
import sieveOfEratosthenes from './calculators/sieve'

let start: number, stop: number
const max = 100000

start = new Date().getTime()
const naiveApproach = naiveCalculator(max).length
stop = new Date().getTime()
console.log(`Naive approach:`)
console.log(`Found ${naiveApproach} in ${stop - start}ms`)

start = new Date().getTime()
const slightlyOptimized = optimizedNaive(max).length
stop = new Date().getTime()
console.log(`Optimized naive approach:`)
console.log(`Found ${slightlyOptimized} in ${stop - start}ms`)

start = new Date().getTime()
const sieve = sieveOfEratosthenes(max).length
stop = new Date().getTime()
console.log(`Basic sieve approach:`)
console.log(`Found ${sieve} in ${stop - start}ms`)

start = new Date().getTime()
const optimizedSieve = optimizedSieveCalc(max).length
stop = new Date().getTime()
console.log(`Optimized sieve approach:`)
console.log(`Found ${optimizedSieve} in ${stop - start}ms`)
