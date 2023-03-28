import { NoiseMapInterface, RandomnessFunctionInstance } from './interfaces'

// This is effectively the interface for the NoiseMap classes' constructors... *At least the one passed to fBm
// This is properly bad, but there's no way to just have an interface for a constructor (And there shouldn't be)
// Also, I need to include this segment in order to be able to pass a class to be created n times
export type NoiseMapClassParam = new (
  randomnessFunction: RandomnessFunctionInstance
) => NoiseMapInterface

export type FBMCreationParams = {
  noiseMaps: NoiseMapInterface[]
  x_frequency: number
  y_frequency: number
  amplitude: number
  lacunarity: number
  gain: number
}
