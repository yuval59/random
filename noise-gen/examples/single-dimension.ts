import {
  FractionalBrownianMotion,
  GradientNoise,
  ValueNoise,
  getMulberry32,
} from '../'
import { writeData } from './write'

// Noise map constants
const octaves = 8
const seed = 256
// Generation constants
const width = 500
const stepSize = 0.003

const noiseMap = new FractionalBrownianMotion(
  Array.from({ length: octaves }, () => new GradientNoise(getMulberry32(seed)))
)

const result = []

for (let x = 0; x < width; x++) {
  result.push(noiseMap.getValueAt(x * stepSize, 0.5))
}

writeData('noise-map.json', { result })
