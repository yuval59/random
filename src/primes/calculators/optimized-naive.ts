import optimizedChecker from '../checkers/optimized-basic'
import { PrimeCalculator } from '../types'

const optimizedNaive: PrimeCalculator = (
  max: number,
  min?: number
): number[] => {
  if (!min || min < 2) min = 2

  const res: number[] = []

  for (let n = min; n <= max; n++) {
    if (optimizedChecker(n)) res.push(n)
  }

  return res
}

export default optimizedNaive
