import * as func from '../funciton.js'
import getters from './getter.js'
import actions from 'actions.js'
import mutations from 'mutations.js'

const state = func.local.get() || {
    event: [],
    id: 0
}
export default {
    state,
    getters,
    mutations,
    actions
}