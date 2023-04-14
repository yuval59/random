import { PrimeCalculator } from '../types'

const sieveOfEratosthenes: PrimeCalculator = (max: number, min?: number) => {
  if (!min || min < 2) min = 2

  let checkList: boolean[] = Array.from({ length: max - min }, () => true)

  for (let n = 0; n < max - min; n++) {
    if (!checkList[n]) continue

    checkList = checkList.map((val, index) => {
      if (index > n && (index + min) % (n + min) == 0) return false
      return val
    })
  }

  return checkList
    .map((val, index) => (val ? index + min : 0))
    .filter((val) => val != 0)
}

export default sieveOfEratosthenes
