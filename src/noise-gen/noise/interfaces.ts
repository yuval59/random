export interface HashFunction<outputType> {
  (seed: string): outputType
}

export interface RandomnessFunction {
  (): number
}

export interface ValueFunction<valueType> {
  (): valueType
}
