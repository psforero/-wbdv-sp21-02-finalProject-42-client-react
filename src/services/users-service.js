const USERS_URL = 'http://localhost:4000/api/users'

export const findAllUsers = () =>
  fetch(`${USERS_URL}`)
    .then(response => response.json())


const api = {
  findAllUsers,
}

export default api

// users ROUTES FROM API
// app.get('/api/users', findAllUsers)
// app.get('/api/users/:userId', findUserById)
// app.get('/api/users/:userId/advisory', findAdvisoryForTeacher)
// app.post('/api/users', createUser)
// app.put('/api/users/:userId', updateUser)
// app.delete('/api/users/:userId', deleteUser)