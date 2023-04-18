import {
  CalculatorComparison,
  CheckerComparison,
  ComparisonRunResult,
  PrimeCalculator,
  PrimeGenerationResult,
  UncheckedPrimeCalculator,
} from '../types'

export function getCalculatorResults(
  calculator: CalculatorComparison,
  checkers: CheckerComparison[],
  max: number,
  min?: number
): PrimeGenerationResult[] {
  const startTime = new Date().getTime()

  const [calculatorName, calculatorFunction, isUnchecked] = calculator

  if (isUnchecked)
    return [
      [
        [calculatorName], // I'm not sure I like passing in the name just to spit it back out
        (calculatorFunction as UncheckedPrimeCalculator)(max, min).length,
        new Date().getTime() - startTime,
      ],
    ]

  return checkers.map(([checkerName, checkerFunction]) => [
    [calculatorName, checkerName], // I'm not sure I like passing in the names just to spit them back out
    (calculatorFunction as PrimeCalculator)(checkerFunction, max, min).length,
    new Date().getTime() - startTime,
  ])
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
  return [
    getComparisonResults(calculators, checkers, max, min),
    new Date().getTime() - startTime,
  ]
}
