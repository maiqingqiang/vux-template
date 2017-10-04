import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  state: {
    isLoading: false
  },
  mutations: {
    [types.UPDATE_LOADING_STATUS] (state, isLoading) {
      state.isLoading = isLoading
    }
  },
  modules: {

  }
})
