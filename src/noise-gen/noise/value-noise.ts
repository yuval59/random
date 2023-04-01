import { lerp } from '../utils/useful-math'
import { NoiseMap } from './abstract'
import { RandomnessFunction } from './interfaces'

export class ValueNoise extends NoiseMap<number> {
  constructor(randomnessFunction: RandomnessFunction, size?: number) {
    super(() => randomnessFunction(), size)
  }

  getValueAt(x: number, y: number): number {
    x = x % 1
    y = y % 1

    const xOffset = (x * (this.Size - 1)) % 1
    const yOffset = (y * (this.Size - 1)) % 1

    x = x * (this.Size - 1) - xOffset
    y = y * (this.Size - 1) - yOffset

    const n00 = this.getValue(x, y)
    const n01 = this.getValue(x, y + 1)
    const n10 = this.getValue(x + 1, y)
    const n11 = this.getValue(x + 1, y + 1)

    return lerp(lerp(n00, n01, yOffset), lerp(n10, n11, yOffset), xOffset)
  }
}
