import { NoiseMapInterface } from '../interfaces'
import { NoiseMapClassParam, NoiseMaps } from '../types'
import { getCurrentSeed } from '../useful-math'

export function getFBM(
  classToImplement: NoiseMapClassParam,
  octaves: number,
  randomnessFunction: Function = Math.random,
  amplitude: number = 0.05,
  startingXFrequency: number = 0.01,
  startingYFrequency: number = 0.01,
  lacunarity: number = 2.5,
  gain: number = 0.5
): FractionalBrownianMotion {
  return new FractionalBrownianMotion(
    Array.from(
      { length: octaves },
      () => new classToImplement(getCurrentSeed(randomnessFunction))
    ),
    startingXFrequency,
    startingYFrequency,
    amplitude,
    lacunarity,
    gain
  )
}

export class FractionalBrownianMotion implements NoiseMapInterface {
  #octaves: number
  #startingXFrequency: number
  #startingYFrequency: number
  #startingAmplitude: number
  #lacunarity: number
  #gain: number

  #noiseMaps: NoiseMaps[]

  constructor(
    randomnessFunctions: NoiseMaps[],
    x_frequency: number,
    y_frequency: number,
    amplitude: number,
    lacunarity: number,
    gain: number
  ) {
    this.#noiseMaps = randomnessFunctions
    this.#startingXFrequency = x_frequency
    this.#startingYFrequency = y_frequency
    this.#startingAmplitude = amplitude
    this.#lacunarity = lacunarity
    this.#gain = gain
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
