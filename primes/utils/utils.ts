import { PrimeCalculator, UncheckedPrimeCalculator } from '../types'

export function isUncheckedCalculator(
  calculatorFunction: PrimeCalculator | UncheckedPrimeCalculator
): calculatorFunction is UncheckedPrimeCalculator {
  // This is such an unbelieveably shitty solution, I'm honestly at a loss
  try {
    ;(calculatorFunction as UncheckedPrimeCalculator)(3, 3)
  } catch (err) {
    return false
  }
  return true
}
