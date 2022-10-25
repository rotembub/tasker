import { companyService } from '../../services/company.service'

export const companyModule = {
    state() {
        return {
            companies: null,
            filterBy: {}
        }
    },
    getters: {
        companies(state) {
            return state.companies
        }
    },
    mutations: {
        setCompanies(state, { companies }) {
            state.companies = companies
        },
        removeCompany(state, { companyId }) {
            const idx = state.companies.findIndex((company) => company.id === companyId)
            state.companies.splice(idx, 1)
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
        async loadCompanies({ commit }) {
            const companies = await companyService.query()
            console.log(companies)
            commit({ type: 'setCompanies', companies })
        },
        async removeCompany({ commit }, { companyId }) {
            await companyService.removeCompany(companyId)
            commit({ type: 'removeCompany', companyId })
        },
        async setFilter({ commit }, { filterBy }) {
            commit({ type: 'setFilter', filterBy })
        },
    },
}
