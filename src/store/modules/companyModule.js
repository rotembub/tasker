import { companyService } from '../../services/company.service'

export const companyModule = {
    state() {
        return {
            companies: null,
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
        // setSelectedCompany(state, { companyId }) {
        //     // state.selectedCompanyId = companyId
        //     console.log(state.companies, companyId)
        //     state.selectedCompany = state.companies.find(company => company._id === companyId)
        //     console.log(state.selectedCompany)
        // },
        updateCompany(state, { updatedCompany }) {
            const idx = state.companies.findIndex(company => company._id === updatedCompany._id)
            state.companies.splice(idx, 1, updatedCompany)
        },
        setSelectedCompany(state, { company }) {
            state.selectedCompany = company
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
        async loadCompanies({ commit, dispatch }) {
            try {
                const companies = await companyService.query()
                console.log(companies)
                commit({ type: 'setCompanies', companies })
                // for the first load:
                dispatch({ type: 'selectCompanyById', companyId: companies[0]._id })

            } catch (err) {
                console.error('Failed to load companies', err)
            }
        },
        async setFilter({ commit }, { filterBy }) {
            commit({ type: 'setFilter', filterBy })
        },
        async selectCompanyById({ commit }, { companyId }) {
            const company = await companyService.getById(companyId)
            console.log(company, companyId)
            commit({ type: 'setSelectedCompany', company })
        },
        async addDepartment({ commit, state }, { department }) {
            const companyId = state.selectedCompany._id
            const updatedCompany = await companyService.addDepartment(companyId, department)
            console.log(updatedCompany);
            commit({ type: 'updateCompany', updatedCompany })
            commit({ type: 'setSelectedCompany', company: updatedCompany })
        }
    },
}
