export default function basicChecker(num: number): boolean {
  for (let n = 2; n < num; n++) if (num % n == 0) return false
  return true
}
