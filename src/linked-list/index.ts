import { LinkedList } from './classes/linked-list'
// Do stuff with the data structure

const myList = new LinkedList('Fry')
myList.add('Zoidberg')
myList.add('Amy')
myList.add('Leela')

const secondList = new LinkedList('Lars')
secondList.add(myList.getFirstByValue('Zoidberg'))

myList.printAll()
secondList.printAll()

myList.add('Hermes')
secondList.add('Bender')

myList.printAll()
secondList.printAll()
