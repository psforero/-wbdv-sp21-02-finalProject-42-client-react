const CHECKINS_URL = 'http://localhost:4000'

export const getAllCheckins = () =>
  fetch(`${CHECKINS_URL}/api/checkins`)
    .then(response => response.json())

export const getCheckinsForUser = (userId, userType) =>
  fetch(`${CHECKINS_URL}/api/users/${userId}/checkins?type=${userType}`)
    .then(response => response.json())


const api = {
  getAllCheckins,
  getCheckinsForUser
}

export default api

// checkins ROUTES FROM API
// app.get('/api/checkins', findAllCheckins)
// app.get('/api/checkins/:checkinId', findCheckinById)
// app.get('/api/users/:userId/checkins', findCheckinsForUser) // ?type=STUDENT or TEACHER
// app.post('/api/users/:userId/checkins', createCheckin)
// app.put('/api/users/:userId/checkins/:checkinId', updateCheckin)
// app.delete('/api/users/:userId/checkins/:checkinId', deleteCheckin)