export interface PrimeChecker {
  (num: number): boolean
}

export interface PrimeCalculator {
  (max: number, min?: number): number[]
}
