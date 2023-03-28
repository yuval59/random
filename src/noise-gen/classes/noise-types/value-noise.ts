import { NoiseMapInterface } from '../../interfaces'
import { getMulberry32, lerp } from '../../useful-math'

export class ValueNoise implements NoiseMapInterface {
  #seed: number
  #randomnessFunction: Function
  #size: number = 255
  #valueMap: number[][]

  constructor(seed: number) {
    this.#randomnessFunction = getMulberry32(seed)
    this.#seed = seed

    this.#valueMap = Array.from({ length: this.Size }, () =>
      this.#makeInsideArr()
    )
  }

  #makeInsideArr = () =>
    Array.from({ length: this.Size }, () => this.#randomnessFunction())

  //#region Basic getters
  get Size() {
    return this.#size
  }

  get Seed() {
    return this.#seed
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

    const n00 = this.#valueMap[x][y]
    const n01 = this.#valueMap[x][y + 1]
    const n10 = this.#valueMap[x + 1][y]
    const n11 = this.#valueMap[x + 1][y + 1]

    return lerp(lerp(n00, n01, yOffset), lerp(n10, n11, yOffset), xOffset)
  }
  //#endregion
}
