import { userService } from '../../services/user.service'

export const userModule = {
    state() {
        return {
            users: null,
            filterBy: {}
        }
    },
    getters: {
        users(state) {
            return state.users
        }
    },
    mutations: {
        setUsers(state, { users }) {
            state.users = users
        },
        removeUser(state, { userId }) {
            const idx = state.users.findIndex((user) => user.id === userId)
            state.users.splice(idx, 1)
        },
        setFilter(state, { filterBy }) {
            if (!Object.values(filterBy).length) {
                state.filterBy = {}
                return
            }
            state.filterBy[filterBy.selectName] = filterBy.option
        },
    },
    actions: {
        async loadUsers({ commit }) {
            const users = await userService.query()
            commit({ type: 'setUsers', users })
        },
        async removeUser({ commit }, { userId }) {
            await userService.removeUser(userId)
            commit({ type: 'removeUser', userId })
        },
        async setFilter({ commit }, { filterBy }) {
            commit({ type: 'setFilter', filterBy })
        },
    },
}
