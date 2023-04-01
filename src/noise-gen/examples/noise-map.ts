import fs from 'fs'
import {
  FractionalBrownianMotion,
  GradientNoise,
  ValueNoise,
} from '../noise/noise'
import { getHashedSFC, getMulberry32 } from '../utils/useful-math'

// Noise map constants
const octaves = 8
const seed = 256
// Generation constants
const width = 500
const height = 500
const stepSize = 0.003

const noiseMap = new FractionalBrownianMotion(
  Array.from({ length: octaves }, () => new GradientNoise(getMulberry32(seed)))
)

const result: number[][] = []
let max = -999
let min = 999

for (let x = 0; x < width; x++) {
  const newColumn: number[] = []
  for (let y = 0; y < height; y++) {
    const val = noiseMap.getValueAt(stepSize * x, stepSize * y)

    if (val < min) min = val
    if (val > max) max = val

    newColumn.push(val)
  }
  result.push(newColumn)
}

fs.writeFileSync(
  'processing-noise-vis/data/noise-map.json',
  JSON.stringify({ min, max, data: result })
)
console.log('Finished writing value JSON')
console.log(`Min was ${min} and max was ${max}`)
