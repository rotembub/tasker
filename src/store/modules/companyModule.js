import { companyService } from '../../services/company.service'

export const companyModule = {
    state() {
        return {
            companies: null,
            // selectedCompanyId: null,
            selectedCompany: null,
            filterBy: {}
        }
    },
    getters: {
        companies(state) {
            return state.companies
        },
        selectedCompany(state) {
            return state.selectedCompany
        },
        departments(state) {
            return state.selectedCompany.departments
        },
        employees(state) {
            return state.selectedCompany.employees
        }
    },
    mutations: {
        setCompanies(state, { companies }) {
            state.companies = companies
        },
        setSelectedCompany(state, { companyId }) {
            // state.selectedCompanyId = companyId
            console.log(state.companies, companyId)
            state.selectedCompany = state.companies.find(company => company._id === companyId)
            console.log(state.selectedCompany)
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
            // for the first loading of the site
            commit({ type: 'setSelectedCompany', companyId: companies[0]._id })
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
