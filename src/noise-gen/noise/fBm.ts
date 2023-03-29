import { NoiseMap } from './interfaces'

export const getFBM = (
  noiseMaps: NoiseMap[],
  amplitude: number = 0.05,
  startingXFrequency: number = 0.01,
  startingYFrequency: number = 0.01,
  lacunarity: number = 2.5,
  gain: number = 0.5
): FractionalBrownianMotion =>
  new FractionalBrownianMotion({
    noiseMaps,
    startingXFrequency,
    startingYFrequency,
    amplitude,
    lacunarity,
    gain,
  })

type FBMCreationParams = {
  noiseMaps: NoiseMap[]
  startingXFrequency: number
  startingYFrequency: number
  amplitude: number
  lacunarity: number
  gain: number
}

class FractionalBrownianMotion implements NoiseMap {
  #octaves: number
  #startingXFrequency: number
  #startingYFrequency: number
  #startingAmplitude: number
  #lacunarity: number
  #gain: number

  #noiseMaps: NoiseMap[]

  constructor(params: FBMCreationParams) {
    this.#noiseMaps = params.noiseMaps
    this.#octaves = params.noiseMaps.length
    this.#startingXFrequency = params.startingXFrequency
    this.#startingYFrequency = params.startingYFrequency
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
