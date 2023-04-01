export interface HashFunction<outputType> {
  (seed: string): outputType
}

export interface RandomnessFunction<seedType> {
  (seed: seedType): RandomnessFunctionInstance
}

export interface RandomnessFunctionInstance {
  (): number
}

export interface ValueFunction<valueType> {
  (): valueType
}
