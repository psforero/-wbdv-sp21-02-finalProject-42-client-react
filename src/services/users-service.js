const USERS_URL = 'http://localhost:4000/api/users'

export const findAllUsers = () =>
  fetch(`${USERS_URL}`)
    .then(response => response.json())

const profile = () => {
  return fetch(`${USERS_URL}/profile`, {
    method: 'POST',
    credentials: 'include'
  }).then(response => response.json())
}

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

const logout = () => {
}

const api = {
  findAllUsers,
  register,
  login,
  logout,
  profile
}

export default api

// users ROUTES FROM API
// app.get('/api/users', findAllUsers)
// app.get('/api/users/:userId', findUserById)
// app.get('/api/users/:userId/advisory', findAdvisoryForTeacher)
// app.post('/api/users', createUser)
// app.put('/api/users/:userId', updateUser)
// app.delete('/api/users/:userId', deleteUser)