import { createStore } from 'vuex'
import { companyModule } from './modules/companyModule'

export const store = createStore({
    state() { },
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        companyModule
    },
})
