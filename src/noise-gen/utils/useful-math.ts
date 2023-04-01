import {
  HashFunction,
  RandomnessFunction,
  RandomnessFunctionInstance,
} from '../noise/interfaces'

export const getHashedSFC: HashFunction<RandomnessFunctionInstance> = (
  seed: string
): RandomnessFunctionInstance => sfc32(cyrb128(seed))

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

export const sfc32: RandomnessFunction<length4Arr> = (
  seed: length4Arr
): RandomnessFunctionInstance => {
  return (): number => {
    // I tried refraining from seed[] by using unpacking to new variables, but the function stopped working
    seed[0] >>>= 0
    seed[1] >>>= 0
    seed[2] >>>= 0
    seed[3] >>>= 0
    let t = (seed[0] + seed[1]) | 0
    seed[0] = seed[1] ^ (seed[1] >>> 9)
    seed[1] = (seed[2] + (seed[2] << 3)) | 0
    seed[2] = (seed[2] << 21) | (seed[2] >>> 11)
    seed[3] = (seed[3] + 1) | 0
    t = (t + seed[3]) | 0
    seed[2] = (seed[2] + t) | 0
    return (t >>> 0) / 4294967296
  }
}

export const getMulberry32: RandomnessFunction<number> = (
  seed: number
): RandomnessFunctionInstance => {
  return (): number => {
    var t = (seed += 0x6d2b79f5)
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
