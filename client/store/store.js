const store = {
  state: {
    show: false
  },
  toggleShowAction () {
    this.state.show = !this.state.show
  }
}

export { store as Store }
