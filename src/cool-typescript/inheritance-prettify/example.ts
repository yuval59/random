interface baseThing {
  num: number
  name: string
}

interface coolThing extends baseThing {
  cool: boolean
}

interface what extends coolThing {
  timestamp?: string | number
}
