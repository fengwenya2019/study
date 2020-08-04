import { observable, action } from 'mobx'

class HelloStore {
  @observable isVisible = true

  @action Click() {
    this.isVisible = false
  }
}

export default new HelloStore()