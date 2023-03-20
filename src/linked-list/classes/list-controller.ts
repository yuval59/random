import { AcceptableValueTypes } from '../types/list-types'

export class LinkedList {
  _rootItem: LinkedListItem

  constructor(firstItemValue: AcceptableValueTypes) {
    this._rootItem = new LinkedListItem(firstItemValue)
  }

  //#region Helper methods
  _removeByItem(itemToRemove: LinkedListItem) {
    let currentItem = this._rootItem
    while (currentItem.Next) {
      if (currentItem.Next == itemToRemove)
        currentItem.setNext(currentItem.Next.Next)

      currentItem = currentItem.Next
    }
  }

  _removeOneByValue(valueToRemove: AcceptableValueTypes) {
    let currentItem = this._rootItem
    while (currentItem.Next) {
      if (currentItem.Next.Value == valueToRemove)
        return currentItem.setNext(currentItem.Next.Next)

      currentItem = currentItem.Next
    }
  }

  _removeAllByValue(valueToRemove: AcceptableValueTypes) {
    let currentItem = this._rootItem
    while (currentItem && currentItem.Next) {
      if (currentItem.Next.Value == valueToRemove) {
        currentItem.setNext(currentItem.Next.Next)
        continue
      }

      currentItem = currentItem.Next
    }
  }

  _addToEnd(valueOrItem: AcceptableValueTypes | LinkedListItem) {
    this.getLast().setNext(new LinkedListItem(valueOrItem))
  }

  _addToBeginning(valueOrItem: AcceptableValueTypes | LinkedListItem) {
    const newRoot = new LinkedListItem(valueOrItem)
    newRoot.setNext(this._rootItem)

    this._rootItem = newRoot
  }
  //#endregion

  //#region Public methods
  add = this._addToEnd
  addToBeginning = this._addToBeginning
  push = this._addToEnd
  unshift = this._addToBeginning

  removeNthItem(index: number) {
    this._removeByItem(this.getNthItem(index))
  }

  removeItemByValue(
    valueToRemove: AcceptableValueTypes,
    removeDuplicates: boolean = true
  ) {
    removeDuplicates
      ? this._removeAllByValue(valueToRemove)
      : this._removeOneByValue(valueToRemove)
  }

  setNewRoot(valueOrItem: LinkedListItem | AcceptableValueTypes) {
    this._rootItem = new LinkedListItem(valueOrItem)
  }
  //#endregion

  //#region Get methods
  get Root() {
    return this._rootItem
  }

  getRoot = () => this._rootItem

  getLast() {
    let currentItem = this._rootItem
    while (currentItem.Next) currentItem = currentItem.Next

    return currentItem
  }

  getNthItem(index: number) {
    let currentItem = this._rootItem
    for (let i = 0; i < index; i++) currentItem = currentItem.Next

    return currentItem
  }

  getFirstByValue(valueToFind: AcceptableValueTypes) {
    let currentItem = this._rootItem

    while (currentItem.Next) {
      if (currentItem.Next.Value == valueToFind) return currentItem.Next

      currentItem = currentItem.Next
    }
  }
  //#endregion

  printAll() {
    // This is complete garbage - putting everything in an array completely defeats the purpose of the data structure
    // The only reason this is here is debugging
    const valueArr = [this._rootItem.Value]

    let currentItem = this._rootItem

    while (currentItem.Next) {
      currentItem = currentItem.Next

      valueArr.push(currentItem.Value)
    }

    console.log(valueArr)
  }
}

class LinkedListItem {
  _value: string | number
  _next: LinkedListItem | null

  constructor(valueOrExistingItem: AcceptableValueTypes | LinkedListItem) {
    if (valueOrExistingItem instanceof LinkedListItem) {
      this._value = valueOrExistingItem.Value
      this._next = valueOrExistingItem.Next
      return
    }

    this._value = valueOrExistingItem as AcceptableValueTypes
  }

  //#region Get methods
  getValue = () => this._value
  getNext = () => this._next

  get Value() {
    return this._value
  }
  get Next() {
    return this._next
  }
  //#endregion

  //#region Set methods
  setValue(newValue: AcceptableValueTypes) {
    this._value = newValue
  }
  setNext(newNext: LinkedListItem | null) {
    this._next = newNext
  }
  //#endregion
}
