const CHECKINS_URL = 'http://localhost:4000/api/checkins' // this may be a bad REST url. Only for testing

export const findAllCheckins = () =>
  fetch(`${CHECKINS_URL}`)
    .then(response => response.json())


const api = {
  findAllCheckins,
}

export default api

// checkins ROUTES FROM API
// app.get('/api/checkins', findAllCheckins)
// app.get('/api/checkins/:checkinId', findCheckinById)
// app.get('/api/users/:userId/checkins', findCheckinsForUser) // ?type=STUDENT or TEACHER
// app.post('/api/users/:userId/checkins', createCheckin)
// app.put('/api/users/:userId/checkins/:checkinId', updateCheckin)
// app.delete('/api/users/:userId/checkins/:checkinId', deleteCheckin)