export interface NoiseMapInterface {
  getValueAt(x: number, y: number): number
}

export interface RandomnessFunction<SeedType> {
  (seed: SeedType): RandomnessFunctionInstance
}

export interface RandomnessFunctionInstance {
  (): number
}
