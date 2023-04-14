import { PrimeCalculator } from './interfaces'

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
