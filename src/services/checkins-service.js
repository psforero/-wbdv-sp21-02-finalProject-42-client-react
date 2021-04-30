const CHECKINS_URL = 'http://localhost:4000/api'

export const getAllCheckins = () =>
  fetch(`${CHECKINS_URL}/checkins`)
    .then(response => response.json())

export const getCheckinById = (checkinId) =>
  fetch(`${CHECKINS_URL}/checkins/${checkinId}`)
    .then(response => response.json())

export const getCheckinsForUser = (userId, userType) => {
  return (
  fetch(`${CHECKINS_URL}/users/${userId}/checkins?type=${userType}`)
    .then(response => response.json())
  )
}

export const createCheckin = (studentId, teacherId) =>
  fetch(`${CHECKINS_URL}/users/${studentId}/checkins/${teacherId}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json());

export const deleteCheckin = (checkinId) =>
  fetch(`${CHECKINS_URL}/checkins/${checkinId}`, {
    method: 'DELETE',
  });

export const updateCheckin = (checkin) => {
  return fetch(`${CHECKINS_URL}/checkins/${checkin._id}`, {
    method: 'PUT',
    credentials: 'include',
    body: JSON.stringify((checkin)),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
}
const api = {
  getAllCheckins,
  getCheckinsForUser,
  getCheckinById,
  createCheckin,
  deleteCheckin,
  updateCheckin
}

export default api

// checkins ROUTES FROM API
// app.get('/api/checkins', findAllCheckins)
// app.get('/api/checkins/:checkinId', findCheckinById)
// app.get('/api/users/:userId/checkins', findCheckinsForUser) // ?type=STUDENT or TEACHER
// app.post('/api/users/:userId/checkins', createCheckin)
// app.put('/api/users/:userId/checkins/:checkinId', updateCheckin)
// app.delete('/api/users/:userId/checkins/:checkinId', deleteCheckin)