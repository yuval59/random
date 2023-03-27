import constants from '../constants'

export class VectorN {
  #dimensions: number
  #values: number[]

  constructor(values: number[])
  constructor(...values: number[])
  constructor(values: any) {
    this.#dimensions = values.length
    this.#values = values
  }

  getCopy = () => new VectorN(this.Values)

  //#region Basic getters
  get Magnitude(): number {
    // Square root of the sum of each dimension's value squared
    return Math.sqrt(
      this.#values.reduce((acc, value) => (acc += value * value), 0)
    )
  }

  get x(): number {
    return this.#values[0] | 0
  }

  get y(): number {
    return this.#values[1] | 0
  }

  get z(): number {
    return this.#values[2] | 0
  }

  get Dimensions(): number {
    return this.#dimensions
  }

  get Values() {
    return this.#values
  }

  getValue(dimension: number) {
    return dimension > this.Dimensions - 1 ? 0 : this.#values[dimension]
  }
  //#endregion

  //#region Vector math
  add(vector: VectorN): void {
    if (this.Dimensions != vector.Dimensions)
      throw constants.ERRORS.DIMENSION_INEQUALITY

    this.#values = this.#values.map(
      (val, index) => val + vector.getValue(index)
    )
  }

  subtract(vector: VectorN): void {
    if (this.Dimensions != vector.Dimensions)
      throw constants.ERRORS.DIMENSION_INEQUALITY

    this.#values = this.#values.map(
      (val, index) => val - vector.getValue(index)
    )
  }

  multiply(scalar: number): void {
    this.#values = this.#values.map((val) => val * scalar)
  }

  divide(scalar: number): void {
    this.#values = this.#values.map((val) => val / scalar)
  }

  normalize(magnitude: number = 1): void {
    this.multiply(magnitude / this.Magnitude)
  }
  //#endregion

  //#region Static functions
  static isVector(something: unknown): boolean {
    return something instanceof VectorN
  }

  static normalize(vector: VectorN, magnitude: number = 1): VectorN {
    const vectorCopy = vector.getCopy()
    vectorCopy.normalize(magnitude)
    return vectorCopy
  }

  static random(
    dimensions: number,
    magnitude: number = 1,
    randomnessFunction: Function = Math.random
  ): VectorN {
    const randomVector = new VectorN(
      Array.from({ length: dimensions }, () => randomnessFunction())
    )

    return VectorN.normalize(randomVector, magnitude)
  }

  static dotProduct(vectorA: VectorN, vectorB: VectorN): number {
    if (vectorA.Dimensions != vectorB.Dimensions)
      throw constants.ERRORS.DIMENSION_INEQUALITY

    return vectorA.Values.reduce(
      (acc, current, index) => (acc += current * vectorB.getValue(index)),
      0
    )
  }

  static angleBetween(vectorA: VectorN, vectorB: VectorN): number {
    if (vectorA.Dimensions != vectorB.Dimensions)
      throw constants.ERRORS.DIMENSION_INEQUALITY

    return Math.acos(
      (vectorA.Magnitude * vectorB.Magnitude) /
        VectorN.dotProduct(vectorA, vectorB)
    )
  }

  static add(vectorA: VectorN, vectorB: VectorN): VectorN {
    if (vectorA.Dimensions != vectorB.Dimensions)
      throw constants.ERRORS.DIMENSION_INEQUALITY

    return new VectorN(
      vectorA.Values.map((val, index) => val + vectorB.getValue(index))
    )
  }

  static subtract(vectorA: VectorN, vectorB: VectorN): VectorN {
    if (vectorA.Dimensions != vectorB.Dimensions)
      throw constants.ERRORS.DIMENSION_INEQUALITY

    return new VectorN(
      vectorA.Values.map((val, index) => val - vectorB.getValue(index))
    )
  }

  static multiply(vector: VectorN, scalar: number): VectorN {
    return new VectorN(vector.Values.map((val) => val * scalar))
  }

  static divide(vector: VectorN, scalar: number): VectorN {
    return new VectorN(vector.Values.map((val) => val / scalar))
  }

  static getDistance(vectorA: VectorN, vectorB: VectorN): number {
    if (vectorA.Dimensions != vectorB.Dimensions)
      throw constants.ERRORS.DIMENSION_INEQUALITY

    return Math.sqrt(
      vectorA.Values.reduce(
        (acc, val, index) =>
          (acc += Math.pow(val - vectorB.getValue(index), 2)),
        0
      )
    )
  }
  //#endregion
}
