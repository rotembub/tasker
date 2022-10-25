import { storageService } from './async-storage-service'
import { loadFromStorage, saveToStorage } from './util.service'

export const companyService = {
  query,
  getById,
  removeCompany,
}
const COMPANY_KEY = 'companiesDB'
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
    companies = [
      {
        id: 'u123',
        name: 'Rotem',
        job: 'frontend',
        score: 341
      },
      {
        id: 'u368',
        name: 'Amir',
        job: 'troller',
        score: 1231
      },
      {
        id: 'u245',
        name: 'Adam',
        job: 'boss',
        score: 5432
      },
    ]
    saveToStorage(COMPANY_KEY, companies)
  }
  return companies
}
