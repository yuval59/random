import { Vector2 } from './vector'

export class GradientNoise {
  #seed: number
  #randomnessFunction: Function
  #size: number = 255
  #vectorMap: Vector2[][]

  constructor(seed: number) {
    this.#seed = seed
    this.#randomnessFunction = this.#createMulberry32(this.#seed)

    this.#vectorMap = [...Array(this.#size).keys()].map((something) =>
      [...Array(this.#size).keys()].map((somethingElse) =>
        Vector2.random(this.#randomnessFunction)
      )
    )
  }

  #createMulberry32(a: number): Function {
    return function () {
      var t = (a += 0x6d2b79f5)
      t = Math.imul(t ^ (t >>> 15), t | 1)
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
  }

  //#region Math stuff
  getValueAt(x: number, y: number): number {
    x = x % 1
    y = y % 1

    const xOffset = (x * (this.#size - 1)) % 1
    const yOffset = (y * (this.#size - 1)) % 1

    x = x * (this.#size - 1) - xOffset
    y = y * (this.#size - 1) - yOffset

    const n00 = this.#vectorMap[x][y].dotProduct(xOffset, yOffset)
    const n01 = this.#vectorMap[x][y + 1].dotProduct(xOffset, yOffset - 1)
    const n10 = this.#vectorMap[x + 1][y].dotProduct(xOffset - 1, yOffset)
    const n11 = this.#vectorMap[x + 1][y + 1].dotProduct(
      xOffset - 1,
      yOffset - 1
    )

    return this.#lerp(
      this.#lerp(n00, n01, this.#getFadeCurve(yOffset)),
      this.#lerp(n10, n11, this.#getFadeCurve(yOffset)),
      this.#getFadeCurve(xOffset)
    )
  }

  #lerp(a: number, b: number, amount: number): number {
    return a * (1 - amount) + b * amount
  }

  #getFadeCurve(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }
  //#endregion
}
