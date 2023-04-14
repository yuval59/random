export default function linearSieve(max: number, min?: number): number[] {
  if (!min || min < 2) min = 2

  const foundPrimes: number[] = []
  const ignoreList: boolean[] = Array.from({ length: max - min }, () => false)

  for (let n = min; n <= max; n++) {
    if (!ignoreList[n - min]) foundPrimes.push(n)

    for (const p of foundPrimes) {
      if (n * p > max) break
      ignoreList[n * p - min] = true
      if (n % p == 0) break
    }
  }

  return foundPrimes
}
