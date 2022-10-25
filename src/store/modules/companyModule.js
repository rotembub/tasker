import { companyService } from '../../services/company.service'

export const companyModule = {
    state() {
        return {
            companies: null,
            selectedCompany: null,
            departmentToDelete: null,
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
        },
        departmentToDelete(state) {
            return state.departmentToDelete
        }

    },
    mutations: {
        setCompanies(state, { companies }) {
            state.companies = companies
        },
        updateCompany(state, { updatedCompany }) {
            const idx = state.companies.findIndex(company => company._id === updatedCompany._id)
            state.companies.splice(idx, 1, updatedCompany)
            // const companies = [...state.companies]
            // companies.splice(idx, 1, updatedCompany)
            // state.companies = companies

        },
        setSelectedCompany(state, { company }) {
            state.selectedCompany = company
        },
        removeCompany(state, { companyId }) {
            const idx = state.companies.findIndex((company) => company.id === companyId)
            state.companies.splice(idx, 1)
        },
        setDepartmentToDelete(state, { department }) {
            state.departmentToDelete = department
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
            const company = await companyService.getCompanyById(companyId)
            commit({ type: 'setSelectedCompany', company })
        },
        async addDepartment({ commit, state }, { department }) {
            const companyId = state.selectedCompany._id
            const updatedCompany = await companyService.addDepartment(companyId, department)
            commit({ type: 'updateCompany', updatedCompany })
            commit({ type: 'setSelectedCompany', company: updatedCompany })
        },
        async removeDepartment({ commit, state }, { department, reassignTo }) {
            console.log('asking to remove', department, 'and to reassign to', reassignTo)
            const updatedCompany = await companyService.removeDepartment(state.selectedCompany._id, department, reassignTo)
            console.log('in the store after update:', updatedCompany)
            commit({ type: 'setSelectedCompany', company: updatedCompany })
            commit({ type: 'updateCompany', updatedCompany })
            commit({ type: 'setDepartmentToDelete', department: null })
        }
    },
}
