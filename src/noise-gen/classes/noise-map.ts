import { Vector2 } from './vector'

export class NoiseMap {
  #size: number
  #vectorMap: Vector2[][]

  constructor(size: number) {
    this.#size = size

    this.#vectorMap = [...Array(this.Size + 1).keys()].map((something) =>
      [...Array(this.Size + 1).keys()].map((somethingElse) => Vector2.random())
    )
  }

  //#region Basic getters
  get Size(): number {
    return this.#size
  }
  //#endregion

  //#region Math stuff
  getValueAt(x: number, y: number): number {
    const xOffset = (x * this.Size) % 1
    const yOffset = (y * this.Size) % 1

    const xMult = x * this.Size - xOffset
    const yMult = y * this.Size - yOffset

    const pointA = Vector2.lerp(
      this.#vectorMap[xMult][yMult],
      this.#vectorMap[xMult + 1][yMult],
      xOffset
    )

    const pointB = Vector2.lerp(
      this.#vectorMap[xMult][yMult + 1],
      this.#vectorMap[xMult + 1][yMult + 1],
      xOffset
    )

    return Vector2.lerp(pointA, pointB, yOffset).Magnitude
  }
  //#endregion
}
