import { NoiseMap } from './interfaces'

export type FBMCreationParams = {
  noiseMaps: NoiseMap[]
  startingXFrequency: number
  startingYFrequency: number
  amplitude: number
  lacunarity: number
  gain: number
}
