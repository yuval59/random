import { LOWEST_PRIME } from '../../../constants'
import { PrimeCalculator, PrimeChecker } from '../../../types'

const linearSieve: PrimeCalculator = (
  checker: PrimeChecker,
  max: number,
  min?: number
): number[] => {
  if (!min || min < LOWEST_PRIME) min = LOWEST_PRIME
  const foundPrimes: number[] = []
  const ignoreList: boolean[] = Array.from(
    { length: max - min + 1 },
    () => true
  )

  for (let n = min; n <= max; n++) {
    if (ignoreList[n - min] && checker(n)) foundPrimes.push(n)

    for (const p of foundPrimes) {
      if (n * p > max) break
      ignoreList[n * p - min] = false
      if (n % p == 0) break
    }
  }

  return foundPrimes
}

export default linearSieve
