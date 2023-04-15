import { LOWEST_PRIME } from '../../../constants'
import { PrimeCalculator } from '../../../types'

const cleanSieveOfEratosthenes: PrimeCalculator = (
  max: number,
  min?: number
): number[] => {
  if (!min || min < LOWEST_PRIME) min = LOWEST_PRIME
  return cleanFunction(max).filter((val) => val >= min)
}

const cleanFunction: PrimeCalculator = (max: number): number[] => {
  const min = LOWEST_PRIME

  const foundPrimes: number[] = []
  const checkList: boolean[] = Array.from({ length: max - min + 1 }, () => true)

  for (let n = min; n <= max; n++) {
    if (!checkList[n - min]) continue

    foundPrimes.push(n)

    for (let i = n; i <= max; i += n) checkList[i - min] = false
  }

  return foundPrimes
}

export default cleanSieveOfEratosthenes
