import { getMulberry32, lerp } from '../useful-math'

export class ValueNoise {
  #seed: number
  #randomnessFunction: Function
  #size: number = 255
  #valueMap: number[][]

  constructor(seed: number) {
    this.#seed = seed
    this.#randomnessFunction = getMulberry32(this.#seed)

    this.#valueMap = [...Array(this.#size).keys()].map((something) =>
      [...Array(this.#size).keys()].map((somethingElse) =>
        this.#randomnessFunction()
      )
    )
  }

  //#region Basic getters
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

    const xOffset = (x * (this.#size - 1)) % 1
    const yOffset = (y * (this.#size - 1)) % 1

    x = x * (this.#size - 1) - xOffset
    y = y * (this.#size - 1) - yOffset

    const n00 = this.#valueMap[x][y]
    const n01 = this.#valueMap[x][y + 1]
    const n10 = this.#valueMap[x + 1][y]
    const n11 = this.#valueMap[x + 1][y + 1]

    return lerp(lerp(n00, n01, yOffset), lerp(n10, n11, yOffset), xOffset)
  }
  //#endregion
}
