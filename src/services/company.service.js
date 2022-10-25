import { storageService } from './async-storage-service'
import { loadFromStorage, saveToStorage, makeId } from './util.service'

export const companyService = {
  query,
  getById,
  removeCompany,
  getEmptyDepartment,
  addDepartment,
  updateCompany
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

}, {
  _id: 'c5563',
  name: 'General Motors',
  departments: [
    {
      id: 'd766734',
      name: 'Engineering',
      employees: ['e9993', 'e56772']
    },
    {
      id: 'd723124',
      name: 'Automation R&D',
      employees: ['e38266', 'e59472']
    }
  ],
  employees: [
    {
      id: 'e9993',
      name: 'Jenny Horbach',
      title: 'Junior Engineer',
      department: 'Engineering'
    },
    {
      id: 'e38266',
      name: 'Boris Tokavish',
      title: 'Tech Lead',
      department: 'Automation R&D'
    },
    {
      id: 'e56772',
      name: 'Johnny Williamson',
      title: 'Senior Engineer',
      department: 'Engineering'
    },
    {
      id: 'e59472',
      name: 'Hirohito Toraku',
      title: 'Sales manager',
      department: 'Automation R&D'
    },
  ]

}
]

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

async function updateCompany(company) {
  return storageService.put(COMPANY_KEY, company)
}

async function addDepartment(companyId, department) {
  const company = await getById(companyId)
  company.departments.push(department)
  return updateCompany(company)
}


function getEmptyDepartment() {
  return {
    id: makeId(),
    name: '',
    employees: []
  }
}

function _createCompanies() {
  let companies = loadFromStorage(COMPANY_KEY)
  if (!companies || !companies.length) {
    companies = demoData
    saveToStorage(COMPANY_KEY, companies)
  }
  return companies
}

