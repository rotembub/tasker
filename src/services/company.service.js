import { storageService } from './async-storage-service'
import { loadFromStorage, saveToStorage, makeId } from './util.service'

export const companyService = {
  query,
  getCompanyById,
  removeCompany,
  getEmptyDepartment,
  addDepartment,
  updateCompany,
  removeDepartment,
  getEmptyEmployee,
  addEmployee,
  removeEmployee
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
      department: 'IT services',
      departmentId: 'd531'
    },
    {
      id: 'e732',
      name: 'Mica Hohenheim',
      title: 'Interview instructor',
      department: 'Human Resources',
      departmentId: 'd723124',

    },
    {
      id: 'e9272',
      name: 'Jeb Morgenstein',
      title: 'Software engineer',
      department: 'IT services',
      departmentId: 'd531'
    },
    {
      id: 'e633',
      name: 'Hilary Johansen',
      title: 'Regional manager',
      department: 'Human Resources',
      departmentId: 'd723124',
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
      department: 'Engineering',
      departmentId: 'd766734'
    },
    {
      id: 'e38266',
      name: 'Boris Tokavish',
      title: 'Tech Lead',
      department: 'Automation R&D',
      departmentId: 'd723124'
    },
    {
      id: 'e56772',
      name: 'Johnny Williamson',
      title: 'Senior Engineer',
      department: 'Engineering',
      departmentId: 'd766734'
    },
    {
      id: 'e59472',
      name: 'Hirohito Toraku',
      title: 'Sales manager',
      department: 'Automation R&D',
      departmentId: 'd723124'
    },
  ]

}
]

_createCompanies()

async function query() {
  return storageService.query(COMPANY_KEY)
}

async function getCompanyById(companyId) {
  return storageService.get(COMPANY_KEY, companyId)
}

async function removeCompany(companyId) {
  return storageService.remove(COMPANY_KEY, companyId)
}

async function updateCompany(company) {
  return storageService.put(COMPANY_KEY, company)
}

async function addDepartment(companyId, department) {
  const company = await getCompanyById(companyId)
  company.departments.push(department)
  return updateCompany(company)
}

async function removeDepartment(companyId, departmentId, reassignTo) {
  try {
    let companyToUpdate = await getCompanyById(companyId)
    const departmentToRemove = companyToUpdate.departments.find(dep => dep.id === departmentId)
    const depIdx = companyToUpdate.departments.findIndex(dep => dep.id === departmentId)
    if (reassignTo) {
      var employeesToReassign = companyToUpdate.departments[depIdx].employees
      companyToUpdate = _reassignEmployees(companyToUpdate, reassignTo, employeesToReassign)
    } else {
      companyToUpdate.employees = companyToUpdate.employees.filter(emp => !departmentToRemove.employees.includes(emp.id))
    }
    companyToUpdate.departments.splice(depIdx, 1)
    return updateCompany(companyToUpdate)
  } catch (err) {
    console.error('Could not remove department', err)
  }
}

function _reassignEmployees(company, departmentId, employeesToReassign) {
  const companyToUpdate = JSON.parse(JSON.stringify(company))
  const depIdx = companyToUpdate.departments.findIndex(dep => dep.id === departmentId)
  companyToUpdate.departments[depIdx].employees.push(...employeesToReassign)
  companyToUpdate.employees = companyToUpdate.employees.map(emp => {
    if (employeesToReassign.includes(emp.id)) {
      // if you find an employee who is in the reassigned array
      // then update his dep ID and dep Name
      emp.departmentId = departmentId
      emp.department = companyToUpdate.departments[depIdx].name
    }
    return emp
  })
  return companyToUpdate
}

async function addEmployee(companyId, employee) {
  try {
    const company = await getCompanyById(companyId)
    company.employees.push(employee)
    const depIdx = company.departments.findIndex(dep => dep.id === employee.departmentId)
    company.departments[depIdx].employees.push(employee.id)
    return updateCompany(company)
  } catch (err) {
    console.error('Could not add employee:', err)
  }
}

async function removeEmployee(companyId, departmentId, employeeId) {
  try {
    const company = await getCompanyById(companyId)
    const idx = company.employees.findIndex(emp => emp.id === employeeId)
    const depIdx = company.departments.findIndex(dep => dep.id === departmentId)
    company.employees.splice(idx, 1)
    company.departments[depIdx].employees = company.departments[depIdx].employees.filter(empId => empId !== employeeId)
    return updateCompany(company)
  } catch (err) {
    console.error('Could not delete employee:', err)
  }
}

function getEmptyEmployee() {
  return {
    id: makeId(),
    name: '',
    title: '',
    department: '',
    departmentId: ''
  }
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

