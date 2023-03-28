export function getMulberry32(a: number): Function {
  return function () {
    var t = (a += 0x6d2b79f5)
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

export function getCurrentSeed(randomnessFunction: Function): number {
  return map_range(randomnessFunction(), 0, 1, 0, 10000)
}

export function map_range(
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
): number {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1)
}
