import optimizedChecker from '../checkers/optimized-basic'

export default function optimizedNaive(max: number, min?: number): number[] {
  if (!min || min < 2) min = 2

  const res: number[] = []

  //   const onePercent: number = Math.ceil((max - (min | 2)) / 100)

  for (let n = min | 2; n < max; n++) {
    if (optimizedChecker(n)) res.push(n)
    // if (n % onePercent == 0) console.log(`${n / onePercent}% Done`)
  }

  return res
}
