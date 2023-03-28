import { NoiseMapInterface } from '../../interfaces'
import { getMulberry32, lerpCurve } from '../../useful-math'
import { Vector2 } from '../vector'

export class GradientNoise implements NoiseMapInterface {
  #seed: number
  #randomnessFunction: Function
  #size: number = 255
  #vectorMap: Vector2[][]

  constructor(seed: number) {
    this.#randomnessFunction = getMulberry32(seed)
    this.#seed = seed

    this.#vectorMap = Array.from({ length: this.Size }, () =>
      this.#makeInsideArr()
    )
  }

  #makeInsideArr = () =>
    Array.from({ length: this.Size }, () =>
      Vector2.random(this.#randomnessFunction)
    )

  //#region Basic getters
  get Seed() {
    return this.#seed
  }

  get Size() {
    return this.#size
  }

  get randomNumber() {
    return this.#randomnessFunction()
  }
  //#endregion

  //#region Math stuff
  getValueAt(x: number, y: number): number {
    x = x % 1
    y = y % 1

    const xOffset = (x * (this.Size - 1)) % 1
    const yOffset = (y * (this.Size - 1)) % 1

    x = x * (this.Size - 1) - xOffset
    y = y * (this.Size - 1) - yOffset

    const n00 = this.#vectorMap[x][y].dotProduct(xOffset, yOffset)
    const n01 = this.#vectorMap[x][y + 1].dotProduct(xOffset, yOffset - 1)
    const n10 = this.#vectorMap[x + 1][y].dotProduct(xOffset - 1, yOffset)
    const n11 = this.#vectorMap[x + 1][y + 1].dotProduct(
      xOffset - 1,
      yOffset - 1
    )

    return lerpCurve(
      lerpCurve(n00, n01, yOffset),
      lerpCurve(n10, n11, yOffset),
      xOffset
    )
  }

  //#endregion
}
