import { PrimeCalculator, PrimeChecker } from '../../types'

const basicNaive: PrimeCalculator = (
  checker: PrimeChecker,
  max: number,
  min?: number
) => {
  if (!min || min < 2) min = 2

  const res: number[] = []

  for (let n = min; n <= max; n++) {
    if (checker(n)) res.push(n)
  }

  return { results: res }
}

export default basicNaive
