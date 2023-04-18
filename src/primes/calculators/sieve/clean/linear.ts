import { LOWEST_PRIME } from '../../../constants'
import { UncheckedPrimeCalculator } from '../../../types'

const cleanLinearSieve: UncheckedPrimeCalculator = (
  max: number,
  min?: number
) => {
  if (!min || min < LOWEST_PRIME) min = LOWEST_PRIME
  return {
    isUnchecked: true,
    results: findPrimes(max).filter((val) => val >= min),
  }
}

const findPrimes = (max: number): number[] => {
  const min = LOWEST_PRIME
  const foundPrimes: number[] = []
  const ignoreList: boolean[] = Array.from(
    { length: max - min + 1 },
    () => true
  )

  for (let n = min; n <= max; n++) {
    if (ignoreList[n - min]) foundPrimes.push(n)

    for (const p of foundPrimes) {
      if (n * p > max) break
      ignoreList[n * p - min] = false
      if (n % p == 0) break
    }
  }

  return foundPrimes
}

export default cleanLinearSieve
