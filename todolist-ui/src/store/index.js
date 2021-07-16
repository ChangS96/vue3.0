import {createStore} from 'vuex'

export default createStore({
  //同步使用state
  state: {
    list: [
      {
        title: '方案说法',
        complete: false
      },
      {
        title: '山东工商学院',
        complete: true
      },
      {
        title: '围绕',
        complete: false
      },
    ]
  },

  //第一个是state，第二个是需要修改的值
  //异步使用mutations
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload)
    },
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    clear(state, payload) {
      state.list = payload
    }
  },

  //第一个是store，第二个是修改的值
  actions: {},
  modules: {}
})
