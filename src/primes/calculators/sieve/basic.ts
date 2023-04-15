import optimizedChecker from '../../checkers/optimized'
import { LOWEST_PRIME } from '../../constants'
import { PrimeCalculator } from '../../types'

const sieveOfEratosthenes: PrimeCalculator = (
  max: number,
  min?: number
): number[] => {
  if (!min || min < LOWEST_PRIME) min = LOWEST_PRIME

  const foundPrimes: number[] = []
  const checkList: boolean[] = Array.from({ length: max - min + 1 }, () => true)

  for (let n = min; n <= max; n++) {
    if (!checkList[n - min]) continue

    // This is needed since we have a minimum!
    if (optimizedChecker(n)) foundPrimes.push(n)

    for (let i = n; i <= max; i += n) checkList[i - min] = false
  }

  return foundPrimes
}

export default sieveOfEratosthenes
