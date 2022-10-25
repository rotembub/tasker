import { createStore } from 'vuex'
import { companyModule } from './modules/companyModule'

export const store = createStore({
    state() {
        return {
            viewMode: 'departments',
            isLoading: false,
        }
    },
    getters: {
        viewMode(state) {
            return state.viewMode
        },
        isLoading(state) {
            return state.isLoading
        }
    },
    mutations: {
        setViewMode(state, { viewMode }) {
            state.viewMode = viewMode
        },
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading
        }
    },
    actions: {},
    modules: {
        companyModule
    },
})
