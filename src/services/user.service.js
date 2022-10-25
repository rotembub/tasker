import { storageService } from './async-storage-service'
import { loadFromStorage, saveToStorage } from './util.service'

export const userService = {
  query,
  getById,
  removeUser,
}
const USERS_KEY = 'usersDB'
_createUsers()

async function query() {
  return storageService.query(USERS_KEY)
}

async function getById(userId) {
  return storageService.get(USERS_KEY, userId)
}

async function removeUser(userId) {
  return storageService.remove(USERS_KEY, userId)
}


function _createUsers() {
  let users = loadFromStorage(USERS_KEY)
  if (!users || !users.length) {
    users = [
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
    saveToStorage(USERS_KEY, users)
  }
  return users
}
