// 这里存放一些状态
const

// 配置方法修改state中的值
const;


export default app = {
  // Vuex中store是分模块管理的，未解决不同模块命名冲突问题，加上此属性在使用时要加上对应的模块名进行调用
  // namespaced: true 
  state: {
    login: false // 是否登录
  },
  mutations: {
    // 登录
    LOGIN(state, value) {
      state.login = value
    }
  },
  actions: {
    login({ commit }, view) {
      commit('LOGIN', view);
    }
  }

}
