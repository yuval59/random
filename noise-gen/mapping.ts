export const lerp = (a: number, b: number, amount: number): number => {
  return a * (1 - amount) + b * amount
}

export const getFadeCurve = (t: number): number => {
  return t * t * t * (t * (t * 6 - 15) + 10)
}

export const lerpCurve = (a: number, b: number, amount: number): number => {
  const curve = getFadeCurve(amount)
  return a * (1 - curve) + b * curve
}

export const mapRange = (
  value: number,
  originalLow: number,
  originalHigh: number,
  targetLow: number,
  targetHigh: number
): number => {
  return (
    targetLow +
    ((targetHigh - targetLow) * (value - originalLow)) /
      (originalHigh - originalLow)
  )
}
