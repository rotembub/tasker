import { createStore } from 'vuex'
import { userModule } from './modules/userModule'

export const store = createStore({
    state() { },
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        userModule
    },
})
