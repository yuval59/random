import { NoiseMapInterface } from '../../interfaces'
import { getMulberry32, lerp } from '../../useful-math'

export class ValueNoise implements NoiseMapInterface {
  #seed: number
  #randomnessFunction: Function
  #size: number = 255
  #valueMap: number[][]

  constructor(seed: number) {
    this.#seed = seed
    this.#randomnessFunction = getMulberry32(this.Seed)

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

  getValue(x: number, y: number): number {
    return this.#valueMap[x][y] ?? 0
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

    const n00 = this.getValue(x, y)
    const n01 = this.getValue(x, y + 1)
    const n10 = this.getValue(x + 1, y)
    const n11 = this.getValue(x + 1, y + 1)

    return lerp(lerp(n00, n01, yOffset), lerp(n10, n11, yOffset), xOffset)
  }
  //#endregion
}
