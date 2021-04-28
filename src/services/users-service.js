const USERS_URL = 'http://localhost:4000/api/users'

export const findAllUsers = () =>
  fetch(`${USERS_URL}`)
    .then(response => response.json())

const register = (credentials) => {
  return fetch(`${USERS_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
}

const login = (credentials) => {
  return fetch(`${USERS_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(credentials),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
}

const updateUser = (user) => {
  return fetch(`${USERS_URL}/${user._id}`, {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify((user)),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
}

const initializeUserDatabase = () => {
  return fetch(`${USERS_URL}/initialize`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
}

const api = {
  findAllUsers,
  register,
  login,
  updateUser,
  initializeUserDatabase,
}

export default api

// users ROUTES FROM API
// app.get('/api/users', findAllUsers)
// app.get('/api/users/:userId', findUserById)
// app.get('/api/users/:userId/advisory', findAdvisoryForTeacher)
// app.post('/api/users', createUser)
// app.put('/api/users/:userId', updateUser)
// app.delete('/api/users/:userId', deleteUser)