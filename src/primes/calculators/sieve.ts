import optimizedChecker from '../checkers/optimized-basic'

export default function sieveOfEratosthenes(
  max: number,
  min?: number
): number[] {
  if (!min || min < 2) min = 2

  const foundPrimes: number[] = []
  const checkList: boolean[] = Array.from({ length: max - min }, () => true)

  for (let n = min; n < max; n++) {
    if (!checkList[n - min]) continue

    if (optimizedChecker(n)) foundPrimes.push(n)

    for (let i = n; i < max; i *= n) checkList[i - min] = false
  }

  return foundPrimes
}
