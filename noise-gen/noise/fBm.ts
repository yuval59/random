import { NoiseMap } from './abstract'

export class FractionalBrownianMotion {
  #startingXFrequency: number
  #startingYFrequency: number
  #startingAmplitude: number
  #lacunarity: number
  #gain: number

  #noiseMaps: NoiseMap<unknown>[]

  constructor(
    noiseMaps: NoiseMap<unknown>[],
    startingXFrequency: number = 0.01,
    startingYFrequency: number = 0.01,
    amplitude: number = 0.05,
    lacunarity: number = 2.5,
    gain: number = 0.5
  ) {
    this.#noiseMaps = noiseMaps
    this.#startingXFrequency = startingXFrequency
    this.#startingYFrequency = startingYFrequency
    this.#startingAmplitude = amplitude
    this.#lacunarity = lacunarity
    this.#gain = gain
  }

  //#region Basic getters
  get Octaves(): number {
    return this.#noiseMaps.length
  }

  get xFrequency(): number {
    return this.#startingXFrequency
  }

  get yFrequency(): number {
    return this.#startingYFrequency
  }

  get Amplitude(): number {
    return this.#startingAmplitude
  }

  get Lacunarity(): number {
    return this.#lacunarity
  }

  get Gain(): number {
    return this.#gain
  }
  //#endregion

  getValueAt(x: number, y: number): number {
    let xFreq = this.xFrequency
    let yFreq = this.yFrequency
    let amp = 1
    let result = 0

    for (const noiseMap of this.#noiseMaps) {
      result += noiseMap.getValueAt(x * xFreq, y * yFreq) * amp

      xFreq *= this.Lacunarity
      yFreq *= this.Lacunarity
      amp *= this.Gain
    }

    return result
  }
}
