import {
  CalculatorComparison,
  CheckerComparison,
  ComparisonRunResult,
  PrimeCalculator,
  PrimeGenerationResult,
  UncheckedPrimeCalculator,
} from '../types'
import { isUncheckedCalculator } from './utils'

export function getCalculatorResults(
  calculator: CalculatorComparison,
  checkers: CheckerComparison[],
  max: number,
  min?: number
): PrimeGenerationResult[] {
  const startTime = new Date().getTime()

  const [calculatorName, calculatorFunction] = calculator

  if (isUncheckedCalculator(calculatorFunction))
    return [
      {
        names: [calculatorName], // I'm not sure I like passing in the name just to spit it back out
        result: calculatorFunction(max, min).results.length,
        runTime: new Date().getTime() - startTime,
      },
    ]

  return checkers.map(([checkerName, checkerFunction]) => ({
    names: [calculatorName, checkerName], // I'm not sure I like passing in the names just to spit them back out
    result: calculatorFunction(checkerFunction, max, min).results.length,
    runTime: new Date().getTime() - startTime,
  }))
}

function unpackGenerationResults(
  resultArr: PrimeGenerationResult[][]
): PrimeGenerationResult[] {
  const newRes: PrimeGenerationResult[] = []

  for (const res of resultArr) newRes.push(...res)

  return newRes
}

function getComparisonResults(
  calculators: CalculatorComparison[],
  checkers: CheckerComparison[],
  max: number,
  min?: number
): PrimeGenerationResult[] {
  return unpackGenerationResults(
    calculators.map((calculator) =>
      getCalculatorResults(calculator, checkers, max, min)
    )
  )
}

export function runComparisons(
  calculators: CalculatorComparison[],
  checkers: CheckerComparison[],
  max: number,
  min?: number
): ComparisonRunResult {
  const startTime = new Date().getTime()
  return {
    results: getComparisonResults(calculators, checkers, max, min),
    runTime: new Date().getTime() - startTime,
  }
}
