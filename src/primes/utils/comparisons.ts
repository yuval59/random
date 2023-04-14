import { PrimeCalculator } from '../interfaces'
import {
  Comparison,
  ComparisonRunResult,
  PrimeGenerationResult,
} from '../types'

export function getSingleResult(
  name: string,
  primeFunction: PrimeCalculator,
  max: number,
  min?: number
): PrimeGenerationResult {
  const startTime = new Date().getTime()
  return [
    name, // I'm not sure I like passing in the name just to spit it back out
    min ? primeFunction(max, min).length : primeFunction(max).length,
    new Date().getTime() - startTime,
  ]
}

export function runComparisons(
  candidates: Comparison[],
  max: number,
  min?: number
): ComparisonRunResult {
  const startTime = new Date().getTime()
  return [
    candidates.map((candidate) => {
      const [name, primeFunction] = candidate
      const res = min
        ? getSingleResult(name, primeFunction, max, min)
        : getSingleResult(name, primeFunction, max)
      return res
    }),
    new Date().getTime() - startTime,
  ]
}
