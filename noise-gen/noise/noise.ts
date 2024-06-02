type ValueFunction<valueType> = {
  (): valueType
}

export abstract class NoiseMapAbstract<mapType> {
  abstract getValueAt(x: number, y: number, range?: [number, number]): number

  #size: number
  #valueMap: mapType[][]

  constructor(valueFunction: ValueFunction<mapType>, size?: number) {
    this.#size = size || 255

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
