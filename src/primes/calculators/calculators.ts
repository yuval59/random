import basicNaive from './naive-approach/basic'
import optimizedNaive from './naive-approach/optimized'
import sieveOfEratosthenes from './sieve/basic'
import linearSieve from './sieve/linear'

export const naiveApproach = {
  basic: basicNaive,
  optimized: optimizedNaive,
}

export const sieveApproach = {
  basic: sieveOfEratosthenes,
  linear: linearSieve,
}

export default {
  naiveApproach,
  sieveApproach,
}
