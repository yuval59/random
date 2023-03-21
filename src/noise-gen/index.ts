import fs from 'fs'
import { GradientNoise } from './classes/noise-map'

const seed = 127
const width = 500
const height = 500
const stepSize = 0.02

const noiseMap = new GradientNoise(seed)

const result: number[][] = []

for (let x = 0; x < width; x++) {
  const newColumn: number[] = []
  for (let y = 0; y < height; y++) {
    newColumn.push(
      noiseMap.getValueAt((stepSize * y) / height, (stepSize * x) / width)
    )
  }
  result.push(newColumn)
}

fs.writeFileSync('./image.json', JSON.stringify({ data: result }))
