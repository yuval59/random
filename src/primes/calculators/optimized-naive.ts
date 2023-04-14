import optimizedChecker from '../checkers/optimized-basic'

export default function optimizedNaive(max: number, min?: number): number[] {
  if (!min || min < 2) min = 2

  const res: number[] = []

  for (let n = min | 2; n < max; n++) {
    if (optimizedChecker(n)) res.push(n)
  }

  return res
}