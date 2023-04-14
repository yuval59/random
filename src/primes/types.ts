export type PrimeChecker = (num: number) => boolean

export type PrimeCalculator = (max: number, min?: number) => number[]

export type Comparison = [name: string, primeFunction: PrimeCalculator]

export type PrimeGenerationResult = [
  name: string,
  primes: number,
  runTime: number
]

export type ComparisonRunResult = [
  results: PrimeGenerationResult[],
  totalRunTime: number
]
