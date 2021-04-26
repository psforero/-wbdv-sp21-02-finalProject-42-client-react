const CHECKINS_URL = 'http://localhost:4000/api/checkins'

export const findAllCheckins = () =>
  fetch(`${CHECKINS_URL}`)
    .then(response => response.json())

export const findCheckinsForUser = (userId, userType) => {
  fetch(`/api/users/${userId}/checkins?type=${userType}`)
    .then(response => response.json())
}

const api = {
  findAllCheckins,
  findCheckinsForUser
}

export default api

// checkins ROUTES FROM API
// app.get('/api/checkins', findAllCheckins)
// app.get('/api/checkins/:checkinId', findCheckinById)
// app.get('/api/users/:userId/checkins', findCheckinsForUser) // ?type=STUDENT or TEACHER
// app.post('/api/users/:userId/checkins', createCheckin)
// app.put('/api/users/:userId/checkins/:checkinId', updateCheckin)
// app.delete('/api/users/:userId/checkins/:checkinId', deleteCheckin)