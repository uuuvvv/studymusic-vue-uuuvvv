import { createStore } from 'vuex'

// 引入状态管理文件
import mutations from './mutations'
import actions from './actions'
import state from './state'

export default createStore({
  state,
  mutations,
  actions,
  modules: {
  }
})
