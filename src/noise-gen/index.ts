import fs from 'fs'
import { GradientNoise } from './classes/noise-map'

const size = 10
const width = 500
const height = 500

const noiseMapA = new GradientNoise(size)
const noiseMapB = new GradientNoise(size)

const result: number[][] = []

for (let i = 0; i < height; i++) {
  const newRow: number[] = []
  for (let n = 0; n < width; n++) {
    const valueA = noiseMapA.getValueAt(n / width, i / height)
    const valueB = noiseMapB.getValueAt(n / width, i / height)
    const avg = average(valueA, valueB)
    newRow.push(avg)
  }
  result.push(newRow)
}

fs.writeFileSync('./image.json', JSON.stringify({ data: result }))

function average(...numbers: number[]): number {
  return numbers.reduce((acc, current) => (acc += current), 0) / numbers.length
}
