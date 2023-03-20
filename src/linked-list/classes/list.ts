import { AcceptableValueTypes } from '../types/list-types'

export class LinkedListItem {
  _value: string | number
  _next: LinkedListItem | null

  constructor(valueOrExistingItem: AcceptableValueTypes | LinkedListItem) {
    if (valueOrExistingItem instanceof LinkedListItem) {
      this._value = valueOrExistingItem.Value
      this._next = valueOrExistingItem.Next
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
