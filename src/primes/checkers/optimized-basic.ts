export default function optimizedChecker(num: number): boolean {
  if (num == 2) return true

  let max = Math.ceil(num / 2) + 1

  for (let n = 2; n < max; n++) {
    if (num % n == 0) return false
    max = Math.ceil(num / n) + 1
  }

  return true
}
