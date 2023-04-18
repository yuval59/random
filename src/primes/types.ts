export type PrimeChecker = (num: number) => boolean

export type PrimeCalculator = (
  checkerFunction: PrimeChecker,
  max: number,
  min?: number
) => number[]

export type UncheckedPrimeCalculator = (max: number, min?: number) => number[]

export type CalculatorComparison = [
  name: string,
  calculatorFunction: PrimeCalculator | UncheckedPrimeCalculator,
  isUnchecked?: boolean
]

export type CheckerComparison = [name: string, checkerFunction: PrimeChecker]

export type PrimeGenerationResult = [
  names: [calculatorName: string, checkerName?: string],
  primesFound: number,
  runTime: number
]

export type ComparisonRunResult = [
  results: PrimeGenerationResult[],
  totalRunTime: number
]
