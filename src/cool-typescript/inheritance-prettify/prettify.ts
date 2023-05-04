// So, imagine you have some sort of object signature that extends a type.
const obj: what = {
  cool: true,
  num: 1,
  name: 'a',
}
// If you hover over it, however, you see that the type is deep in inheritance.
// Hovering over "obj" here doesn't give you any info about what it can/should include.

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

// This helper type unravels all the inheritance so you can just get the info you need,
// Instead of going digging in layer upon layer of inheritance.

const secondObj: Prettify<what> = {
  cool: true,
  num: 1,
  name: 'a',
}
