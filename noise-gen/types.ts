import { GradientNoise, ValueNoise } from './classes/noise'

export type NoiseMaps = GradientNoise | ValueNoise

export type NoiseMapClassParam = new (seed: number) => NoiseMaps
