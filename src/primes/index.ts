import { naiveApproach, sieveApproach } from './calculators/calculators'
import basicChecker from './checkers/basic'
import optimizedChecker from './checkers/optimized'
import { CalculatorComparison, CheckerComparison } from './types'
import { runComparisons } from './utils/comparisons'

const max = 50000
const min = 4000

const checkers: CheckerComparison[] = [
  ['Basic checker', basicChecker],
  ['Optimized checker', optimizedChecker],
]

const calculators: CalculatorComparison[] = [
  ['Naive approach', naiveApproach.basic],
  ['Basic sieve of Eratosthenes approach', sieveApproach.basic],
  ['Linear sieve of Eratosthenes approach', sieveApproach.linear],
  ['Clean basic sieve of Eratosthenes approach', sieveApproach.clean.basic],
  ['Clean linear sieve of Eratosthenes approach', sieveApproach.clean.linear],
]

console.log('--------------')
min > 0
  ? console.log(
      `Starting comparison program for primes between ${min.toLocaleString()} and ${max.toLocaleString()}`
    )
  : console.log(
      `Starting comparison program for primes up to ${max.toLocaleString()}`
    )

const { results, runTime } = runComparisons(calculators, checkers, max, min)

for (const res of results) {
  const {
    names: [calculatorName, checkerName],
    result,
    runTime,
  } = res

  console.log()
  console.log('--------------')
  console.log(
    `${calculatorName}${checkerName ? ` using ${checkerName}:` : ':'}`
  )
  console.log(`Found ${result} primes in ${runTime}ms`)
}

console.log()
console.log(`Finished running in a total of ${runTime}ms`)
console.log('--------------')
