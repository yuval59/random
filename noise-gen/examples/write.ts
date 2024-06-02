import fs from 'fs'

// Save Location data
const dataDir = './noise-gen/examples/data/'

type DataType = {
  result: number[][]
} & {
  [key: string]: unknown
}

export const writeData = (fileName: string, data: DataType) => {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)

  fs.writeFileSync(dataDir + fileName, JSON.stringify(data))

  console.log('Finished writing value JSON')

  if ('min' in data && 'max' in data)
    console.log(`Min was ${data.min} and max was ${data.max}`)
}
