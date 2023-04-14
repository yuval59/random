import basicChecker from '../checkers/basic'

export default function naiveCalculator(max: number, min?: number): number[] {
  if (!min || min < 3) min = 2

  const res: number[] = []

  for (let n = min; n < max; n++) {
    if (basicChecker(n)) res.push(n)
  }

  return res
}
