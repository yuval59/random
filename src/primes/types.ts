export type PrimeChecker = (num: number) => boolean

export type PrimeCalculator = (
  checkerFunction: PrimeChecker,
  max: number,
  min?: number
) => {
  results: number[]
}

export type UncheckedPrimeCalculator = (
  max: number,
  min?: number
) => {
  isUnchecked: true
  results: number[]
}

export type CalculatorComparison = [
  name: string,
  calculatorFunction: PrimeCalculator | UncheckedPrimeCalculator
]

export type CheckerComparison = [name: string, checkerFunction: PrimeChecker]

export type PrimeGenerationResult = {
  names: [calculatorName: string, checkerName?: string]
  result: number
  runTime: number
}

export type ComparisonRunResult = {
  results: PrimeGenerationResult[]
  runTime: number
}
