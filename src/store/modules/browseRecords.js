const browseRecords = {
  state: {
    browseRecords: []
  },

// eslint-disable-next-line no-labels
mutations: {
  // eslint-disable-next-line no-labels,no-unused-expressions
  addRecords: (state, option) => {
    // 判断重复路由
    if (option.path === '/') {
      return
    }
    for (let i = 0; i < state.browseRecords.length; i++) {
      if (state.browseRecords[i].path === option.path) {
        state.browseRecords.splice(i, 1)
        break
      }
    }
    if (state.browseRecords.length < 6) {
      state.browseRecords.unshift(option)
    } else {
      state.browseRecords.pop()
      state.browseRecords.unshift(option)
    }
    console.log(state)
  }
}
}
export default browseRecords
