import basicChecker from '../checkers/basic'
import { PrimeCalculator } from '../types'

const naiveCalculator: PrimeCalculator = (
  max: number,
  min?: number
): number[] => {
  if (!min || min < 2) min = 2

  const res: number[] = []

  for (let n = min; n <= max; n++) {
    if (basicChecker(n)) res.push(n)
  }

  return res
}

export default naiveCalculator
