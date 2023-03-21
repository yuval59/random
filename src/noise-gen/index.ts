import fs from 'fs'
import { NoiseMap } from './classes/noise-map'

const size = 600
const width = 1000
const height = 1000

const noiseMap = new NoiseMap(size)

const result: number[][] = []

for (let i = 0; i < height; i++) {
  const newRow: number[] = []
  for (let n = 0; n < width; n++) {
    newRow.push(noiseMap.getValueAt(n / width, i / height))
  }
  result.push(newRow)
}

fs.writeFileSync('./image.json', JSON.stringify({ data: result }))
