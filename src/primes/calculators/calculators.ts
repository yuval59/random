import basicNaive from './naive-approach/basic'
import cleanSieveOfEratosthenes from './sieve/clean/basic'
import cleanLinearSieve from './sieve/clean/linear'
import sieveOfEratosthenes from './sieve/optimized/basic'
import linearSieve from './sieve/optimized/linear'

export const naiveApproach = {
  basic: basicNaive,
}

export const sieveApproach = {
  clean: {
    basic: cleanSieveOfEratosthenes,
    linear: cleanLinearSieve,
  },
  basic: sieveOfEratosthenes,
  linear: linearSieve,
}

export default {
  naiveApproach,
  sieveApproach,
}
