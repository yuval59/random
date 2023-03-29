export interface RandomnessFunction<SeedType> {
  (seed: SeedType): RandomnessFunctionInstance
}

export interface RandomnessFunctionInstance {
  (): number
}

export interface ValueFunction<valueType> {
  (): valueType
}
