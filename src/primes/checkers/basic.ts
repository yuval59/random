export default function basicChecker(num: number): boolean {
  for (let n = 2; n < Math.ceil(num / 2); n++) if (num % n == 0) return false
  return true
}
