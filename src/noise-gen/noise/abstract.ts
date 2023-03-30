import { ValueFunction } from './interfaces'

export abstract class NoiseMap<mapType> {
  abstract getValueAt(x: number, y: number): number

  #size: number = 255
  #valueMap: mapType[][]

  constructor(valueFunction: ValueFunction<mapType>, size?: number) {
    if (size) this.#size = size

    this.#valueMap = Array.from({ length: this.Size }, () =>
      this.#makeInsideArr(valueFunction)
    )
  }

  #makeInsideArr = (valueFunction: ValueFunction<mapType>) =>
    Array.from({ length: this.Size }, () => valueFunction())

  get Size() {
    return this.#size
  }

  protected getValue(x: number, y: number): mapType {
    return this.#valueMap[x][y]
  }
}
