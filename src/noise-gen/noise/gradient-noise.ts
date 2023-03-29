import { lerpCurve } from '../utils/useful-math'
import { Vector2 } from '../utils/vector'
import { NoiseMap } from './abstract'
import { RandomnessFunctionInstance } from './interfaces'

export class GradientNoise extends NoiseMap<Vector2> {
  constructor(randomnessFunction: RandomnessFunctionInstance, size?: number) {
    super(() => Vector2.random(randomnessFunction), size)
  }

  getValueAt(x: number, y: number): number {
    x = x % 1
    y = y % 1

    const xOffset = (x * (this.Size - 1)) % 1
    const yOffset = (y * (this.Size - 1)) % 1

    x = x * (this.Size - 1) - xOffset
    y = y * (this.Size - 1) - yOffset

    const n00 = this.getValue(x, y).dotProduct(xOffset, yOffset)
    const n01 = this.getValue(x, y + 1).dotProduct(xOffset, yOffset - 1)
    const n10 = this.getValue(x + 1, y).dotProduct(xOffset - 1, yOffset)
    const n11 = this.getValue(x + 1, y + 1).dotProduct(xOffset - 1, yOffset - 1)

    return lerpCurve(
      lerpCurve(n00, n01, yOffset),
      lerpCurve(n10, n11, yOffset),
      xOffset
    )
  }
}
