import basicChecker from '../checkers/basic'

export default function naiveCalculator(max: number, min?: number): number[] {
  if (!min || min < 3) min = 2

  const res: number[] = []
  //   const onePercent: number = Math.ceil((max - (min | 2)) / 100)

  for (let n = min; n < max; n++) {
    if (basicChecker(n)) res.push(n)
    // if (n % onePercent == 0) console.log(`${n / onePercent}% Done`)
  }

  return res
}
