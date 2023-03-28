import { NoiseMapInterface } from '../interfaces'
import { FBMCreationParams, NoiseMapClassParam } from '../types'
import { getCurrentSeed } from '../useful-math'

export const getFBM = (
  classToImplement: NoiseMapClassParam,
  octaves: number,
  randomnessFunction: Function = Math.random,
  amplitude: number = 0.05,
  startingXFrequency: number = 0.01,
  startingYFrequency: number = 0.01,
  lacunarity: number = 2.5,
  gain: number = 0.5
): FractionalBrownianMotion =>
  new FractionalBrownianMotion({
    noiseMaps: Array.from(
      { length: octaves },
      () => new classToImplement(getCurrentSeed(randomnessFunction))
    ),
    x_frequency: startingXFrequency,
    y_frequency: startingYFrequency,
    amplitude,
    lacunarity,
    gain,
  })

export class FractionalBrownianMotion implements NoiseMapInterface {
  #octaves: number
  #startingXFrequency: number
  #startingYFrequency: number
  #startingAmplitude: number
  #lacunarity: number
  #gain: number

  #noiseMaps: NoiseMapInterface[]

  constructor(params: FBMCreationParams) {
    this.#noiseMaps = params.noiseMaps
    this.#startingXFrequency = params.x_frequency
    this.#startingYFrequency = params.y_frequency
    this.#startingAmplitude = params.amplitude
    this.#lacunarity = params.lacunarity
    this.#gain = params.gain
  }

  //#region Basic getters
  get Octaves(): number {
    return this.#octaves
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
