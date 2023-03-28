import { writeFileSync } from 'fs'
import { getFBM } from '../classes/fBm'
import { getMulberry32 } from '../useful-math'
import { GradientNoise } from '../classes/noise'

// Noise map constants
const octaves = 8
const seed = 256
// Generation constants
const width = 500
const stepSize = 0.003

const noiseMap = getFBM(GradientNoise, octaves, getMulberry32(seed))

const result = []

for (let x = 0; x < width; x++) {
  result.push(noiseMap.getValueAt(x * stepSize, 0.5))
}

writeFileSync(
  'processing-noise-vis/data/single-dimension.json',
  JSON.stringify({ data: result })
)
console.log('Finished writing value JSON')