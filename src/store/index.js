import { createStore } from 'vuex'
import { companyModule } from './modules/companyModule'

export const store = createStore({
    state() {
        return {
            viewMode: 'departments'
        }
    },
    getters: {
        viewMode(state) {
            return state.viewMode
        }
    },
    mutations: {
        setViewMode(state, { viewMode }) {
            state.viewMode = viewMode
        }
    },
    actions: {},
    modules: {
        companyModule
    },
})
