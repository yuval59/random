import { PrimeCalculator, PrimeChecker } from '../../types'

const basicNaive: PrimeCalculator<true> = (
  checker: PrimeChecker,
  max: number,
  min?: number
): number[] => {
  if (!min || min < 2) min = 2

  const res: number[] = []

  for (let n = min; n <= max; n++) {
    if (checker(n)) res.push(n)
  }

  return res
}

export default basicNaive
