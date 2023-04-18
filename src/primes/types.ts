export type PrimeChecker = (num: number) => boolean

export type PrimeCalculator<IsChecked extends boolean> = IsChecked extends true
  ? CheckedPrimeCalculator
  : UncheckedPrimeCalculator

type CheckedPrimeCalculator = (
  checkerFunction: PrimeChecker,
  max: number,
  min?: number
) => number[]

type UncheckedPrimeCalculator = (max: number, min?: number) => number[]

export type CalculatorComparison = [
  name: string,
  calculatorFunction: PrimeCalculator<any>,
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
