import { HashFunction, RandomnessFunction } from '../noise/interfaces'

export function getHashedL4PRNG(
  seed: string,
  hashFunction: HashFunction<length4Arr> = cyrb128,
  PRNG: (...seed: length4Arr) => RandomnessFunction = sfc32
): RandomnessFunction {
  return PRNG(...hashFunction(seed))
}

type length4Arr = [number, number, number, number]

export const cyrb128: HashFunction<length4Arr> = (seed: string): length4Arr => {
  let h1 = 1779033703,
    h2 = 3144134277,
    h3 = 1013904242,
    h4 = 2773480762

  for (let i = 0, k; i < seed.length; i++) {
    k = seed.charCodeAt(i)
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067)
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233)
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213)
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179)
  }

  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067)
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233)
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213)
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179)

  return [
    (h1 ^ h2 ^ h3 ^ h4) >>> 0,
    (h2 ^ h1) >>> 0,
    (h3 ^ h1) >>> 0,
    (h4 ^ h1) >>> 0,
  ]
}

export function sfc32(
  a: number,
  b: number,
  c: number,
  d: number
): RandomnessFunction {
  return (): number => {
    a >>>= 0
    b >>>= 0
    c >>>= 0
    d >>>= 0
    let t = (a + b) | 0
    a = b ^ (b >>> 9)
    b = (c + (c << 3)) | 0
    c = (c << 21) | (c >>> 11)
    d = (d + 1) | 0
    t = (t + d) | 0
    c = (c + t) | 0
    return (t >>> 0) / 4294967296
  }
}

export function xoshiro128ss(
  a: number,
  b: number,
  c: number,
  d: number
): RandomnessFunction {
  return (): number => {
    var t = b << 9,
      r = a * 5
    r = ((r << 7) | (r >>> 25)) * 9
    c ^= a
    d ^= b
    b ^= c
    a ^= d
    c ^= t
    d = (d << 11) | (d >>> 21)
    return (r >>> 0) / 4294967296
  }
}

export function getMulberry32(seed: number): RandomnessFunction {
  return (): number => {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function lerp(a: number, b: number, amount: number): number {
  return a * (1 - amount) + b * amount
}

export function getFadeCurve(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10)
}

export function lerpCurve(a: number, b: number, amount: number): number {
  const curve = getFadeCurve(amount)
  return a * (1 - curve) + b * curve
}
