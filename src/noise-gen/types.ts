import { NoiseMapInterface } from './interfaces'

export type NoiseMapClassParam = new (seed: number) => NoiseMapInterface

export type FBMCreationParams = {
  noiseMaps: NoiseMapInterface[]
  x_frequency: number
  y_frequency: number
  amplitude: number
  lacunarity: number
  gain: number
}
