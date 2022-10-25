import { storageService } from './async-storage-service'
import { loadFromStorage, saveToStorage } from './util.service'

export const companyService = {
  query,
  getById,
  removeCompany,
}
const COMPANY_KEY = 'companiesDB'
// data structure:
const demoData = [{
  _id: 'c4223',
  name: 'Intel',
  departments: [
    {
      id: 'd531',
      name: 'IT services',
      employees: ['e123', 'e9272']
    },
    {
      id: 'd723124',
      name: 'Human resources',
      employees: ['e732', 'e633']
    }
  ],
  employees: [
    {
      id: 'e123',
      name: 'John Harris',
      title: 'Head of Security',
      department: 'IT services'
    },
    {
      id: 'e732',
      name: 'Mica Hohenheim',
      title: 'Interview instructor',
      department: 'Human Resources'
    },
    {
      id: 'e9272',
      name: 'Jeb Morgenstein',
      title: 'Software engineer',
      department: 'IT services'
    },
    {
      id: 'e633',
      name: 'Hilary Johansen',
      title: 'Regional manager',
      department: 'Human Resources'
    },
  ]

}]

_createCompanies()

async function query() {
  return storageService.query(COMPANY_KEY)
}

async function getById(companyId) {
  return storageService.get(COMPANY_KEY, companyId)
}

async function removeCompany(companyId) {
  return storageService.remove(COMPANY_KEY, companyId)
}


function _createCompanies() {
  let companies = loadFromStorage(COMPANY_KEY)
  if (!companies || !companies.length) {
    companies = demoData
    saveToStorage(COMPANY_KEY, companies)
  }
  return companies
}

