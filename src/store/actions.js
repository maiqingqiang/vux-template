import * as types from './mutation-types'

export const UPDATE_LOADING_STATUS = ({ commit }, isLoading) => {
  commit(types.UPDATE_LOADING_STATUS, isLoading)
}

