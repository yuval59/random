import linearSieve from './calculators/linear-sieve'
import naiveCalculator from './calculators/naive'
import optimizedNaive from './calculators/optimized-naive'
import sieveOfEratosthenes from './calculators/sieve'
import { Comparison } from './types'
import { runComparisons } from './utils/comparisons'

const max = 1128000
const min = 0

const comparisonArr: Comparison[] = [
  ['Naive approach', naiveCalculator],
  ['Optimized naive approach', optimizedNaive],
  ['Basic sieve of Eratosthenes approach', sieveOfEratosthenes],
  ['Linear sieve of Eratosthenes approach', linearSieve],
]

console.log('--------------')
min > 0
  ? console.log(
      `Starting comparison program for primes between ${min.toLocaleString()} and ${max.toLocaleString()}`
    )
  : console.log(
      `Starting comparison program for primes up to ${max.toLocaleString()}`
    )

const [results, runTime] = runComparisons(comparisonArr, max, min)

for (const res of results) {
  const [name, primes, runTime] = res
  console.log()
  console.log(`${name}:`)
  console.log(`Found ${primes} primes in ${runTime}ms`)
}

console.log()
console.log(`Finished running in a total of ${runTime}ms`)
console.log('--------------')
