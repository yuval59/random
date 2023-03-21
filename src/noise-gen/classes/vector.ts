export class Vector2 {
  #x: number
  #y: number

  constructor(x: number, y: number) {
    this.#x = x
    this.#y = y
  }

  getCopy = (): Vector2 => new Vector2(this.x, this.y)

  //#region Basic getters
  get Magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  get Angle(): number {
    return Math.atan(this.y / this.x)
  }

  get x(): number {
    return this.#x
  }

  get y(): number {
    return this.#y
  }
  //#endregion

  //#region Vector math
  rotate(angle: number): void {
    const newAngle = this.Angle + angle

    this.#x = Math.cos(newAngle) * this.Magnitude
    this.#y = Math.sin(newAngle) * this.Magnitude
  }

  angleBetween(secondVector: Vector2): number {
    const dotProduct = this.dotProduct(secondVector)
    const combinedMagnitude = this.Magnitude * secondVector.Magnitude

    return Math.acos(dotProduct / combinedMagnitude)
  }

  normalize(magnitude: number = 1): void {
    const currentAngle = this.Angle

    this.#x = Math.cos(currentAngle) * magnitude
    this.#y = Math.sin(currentAngle) * magnitude
  }

  multiply(scalar: number): void {
    this.#x *= scalar
    this.#y *= scalar
  }

  divide(scalar: number): void {
    this.#x /= scalar
    this.#y /= scalar
  }

  lerp(secondVector: Vector2, amount: number): void {
    this.#x = this.x * (1 - amount) + secondVector.x * amount
    this.#y = this.y * (1 - amount) + secondVector.y * amount
  }
  //#endregion

  //#region Ambiguous methods
  //#region Addition
  add(x: number, y: number): void
  add(secondVector: Vector2): void
  add(vectorOrX: Vector2 | number, y?: number): void {
    if (Vector2.isVector(vectorOrX))
      return this.#addValues((vectorOrX as Vector2).x, (vectorOrX as Vector2).y)

    this.#addValues(vectorOrX as number, y)
  }
  #addValues(x: number, y: number): void {
    this.#x += x
    this.#y += y
  }
  //#endregion

  //#region Subtraction
  subtract(x: number, y: number): void
  subtract(secondVector: Vector2): void
  subtract(vectorOrX: Vector2 | number, y?: number): void {
    if (Vector2.isVector(vectorOrX))
      return this.#subtractValues(
        (vectorOrX as Vector2).x,
        (vectorOrX as Vector2).y
      )

    this.#subtractValues(vectorOrX as number, y)
  }
  #subtractValues(x: number, y: number): void {
    this.#x -= x
    this.#y -= y
  }
  //#endregion

  //#region Distance
  distance(x: number, y: number): number
  distance(secondVector: Vector2): number
  distance(vectorOrX: Vector2 | number, y?: number): number {
    if (Vector2.isVector(vectorOrX))
      return this.#distanceFromCoordinates(
        (vectorOrX as Vector2).x,
        (vectorOrX as Vector2).y
      )

    return this.#distanceFromCoordinates(vectorOrX as number, y)
  }
  #distanceFromCoordinates(x: number, y: number): number {
    const xDist = this.x - x
    const yDist = this.y - y

    return Math.sqrt(xDist * xDist + yDist * yDist)
  }
  //#endregion

  //#region Dot product
  dotProduct(x: number, y: number): number
  dotProduct(secondVector: Vector2): number
  dotProduct(vectorOrX: Vector2 | number, y?: number): number {
    if (Vector2.isVector(vectorOrX))
      return this.#dotProduct(
        (vectorOrX as Vector2).x,
        (vectorOrX as Vector2).y
      )

    return this.#dotProduct(vectorOrX as number, y)
  }
  #dotProduct = (x: number, y: number): number => this.x * x + this.y * y
  //#endregion
  //#endregion

  //#region Static methods
  static isVector(something: unknown): boolean {
    return something instanceof Vector2
  }

  static fromAngle(angle: number, magnitude: number = 1): Vector2 {
    return new Vector2(Math.cos(angle) * magnitude, Math.sin(angle) * magnitude)
  }

  static random(randomnessFunction: Function, magnitude?: number): Vector2 {
    const angle = randomnessFunction() * Math.PI * 2

    return this.fromAngle(angle, magnitude | 1)
  }

  static rotate(vectorA: Vector2, angle: number): Vector2 {
    return this.fromAngle(vectorA.Angle + angle, vectorA.Magnitude)
  }

  static angleBetween(vectorA: Vector2, vectorB: Vector2): number {
    const dotProduct = this.dotProduct(vectorA, vectorB)
    const combinedMagnitude = vectorA.Magnitude * vectorB.Magnitude

    return Math.acos(dotProduct / combinedMagnitude)
  }

  static normalize(vector: Vector2, magnitude: number = 1): Vector2 {
    return this.fromAngle(vector.Angle, magnitude)
  }

  static dotProduct(vectorA: Vector2, vectorB: Vector2): number {
    return vectorA.x * vectorB.x + vectorA.y * vectorB.y
  }

  static multiplyVector(vectorA: Vector2, scalar: number): Vector2 {
    return new Vector2(vectorA.x * scalar, vectorA.y * scalar)
  }

  static add(vectorA: Vector2, vectorB: Vector2): Vector2 {
    return new Vector2(vectorA.x + vectorB.x, vectorA.y + vectorB.y)
  }

  static subtract(vectorA: Vector2, vectorB: Vector2): Vector2 {
    return new Vector2(vectorA.x - vectorB.x, vectorA.y - vectorB.y)
  }

  static getDistance(vectorA: Vector2, vectorB: Vector2): number {
    const xDist = vectorA.x - vectorB.x
    const yDist = vectorA.y - vectorB.y

    return Math.sqrt(xDist * xDist + yDist * yDist)
  }

  static lerp(vectorA: Vector2, vectorB: Vector2, amount: number): Vector2 {
    return new Vector2(
      vectorA.x * (1 - amount) + vectorB.x * amount,
      vectorA.y * (1 - amount) + vectorB.y * amount
    )
  }
  //#endregion
}
// The goal here is to create all the operations one might need for handling vectors, not only for this implementation.
// I want someone who had never used this code to be able to just take this class and use it as a vector class for everything
