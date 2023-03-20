import { Vector2 } from './classes/vector'

const vectorA = Vector2.fromAngle(Math.PI / 4)

vectorA.rotate(Math.PI * 2)

console.log(vectorA.x)
console.log(vectorA.y)
