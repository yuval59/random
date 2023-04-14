import linearSieve from './calculators/linear-sieve'
import naiveCalculator from './calculators/naive'
import optimizedNaive from './calculators/optimized-naive'
import sieveOfEratosthenes from './calculators/sieve'
import { Comparison } from './types'
import { runComparisons } from './utils/comparisons'

const max = 100000
const min = 0

const comparisonArr: Comparison[] = [
  ['Naive approach', naiveCalculator],
  ['Optimized naive approach', optimizedNaive],
  ['Basic sieve of Eratosthenes approach', sieveOfEratosthenes],
  ['Linear sieve of Eratosthenes approach', linearSieve],
]

console.log('--------------')
console.log(
  `Starting comparison program for primes up to ${max.toLocaleString()}`
)

const [results, runTime] = min
  ? runComparisons(comparisonArr, max, min)
  : runComparisons(comparisonArr, max)

results.forEach((res) => {
  const [name, primes, runTime] = res
  console.log()
  console.log(`${name}:`)
  console.log(`Found ${primes} primes in ${runTime}ms`)
})

console.log()
console.log(`Finished running in a total of ${runTime}ms`)
console.log('--------------')
