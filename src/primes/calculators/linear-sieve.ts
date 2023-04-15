import optimizedChecker from '../checkers/optimized-basic'
import { LOWEST_PRIME } from '../constants'
import { PrimeCalculator } from '../types'

const linearSieve: PrimeCalculator = (max: number, min?: number): number[] => {
  if (!min || min < LOWEST_PRIME) min = LOWEST_PRIME
  const foundPrimes: number[] = []
  const ignoreList: boolean[] = Array.from({ length: max - min }, () => true)

  for (let n = min; n <= max; n++) {
    if (ignoreList[n - min] && optimizedChecker(n)) foundPrimes.push(n)

    for (const p of foundPrimes) {
      if (n * p > max) break
      ignoreList[n * p - min] = false
      if (n % p == 0) break
    }
  }

  return foundPrimes
}

export default linearSieve
