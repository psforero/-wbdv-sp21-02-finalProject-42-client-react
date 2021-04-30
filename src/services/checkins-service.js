const CHECKINS_URL = 'http://localhost:4000'

export const getAllCheckins = () =>
  fetch(`${CHECKINS_URL}/api/checkins`)
    .then(response => response.json())

export const getCheckinById = (checkinId) =>
  fetch(`${CHECKINS_URL}/api/checkins/${checkinId}`)
    .then(response => response.json())

export const getCheckinsForUser = (userId, userType) =>
  fetch(`${CHECKINS_URL}/api/users/${userId}/checkins?type=${userType}`)
    .then(response => response.json())

export const createCheckin = (studentId, checkin) =>
  fetch(`${CHECKINS_URL}/users/${studentId}/checkins`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(checkin),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json());

export const deleteCheckin = (checkinId) =>
  fetch(`${CHECKINS_URL}/checkins/${checkinId}`, {
    method: 'DELETE',
  });

export const updateCheckin = (checkin) =>
  fetch(`${CHECKINS_URL}/checkins/${checkin.id}`, {
    method: 'PUT',
    body: JSON.stringify(checkin),
    headers: {
      'content-type': 'application/json'
    }
  });
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