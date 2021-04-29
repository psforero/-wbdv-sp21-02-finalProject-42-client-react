const SHEET_URL = 'http://localhost:4000/api/spreadsheet' // this may be a bad REST url. Only for testing

export const getAllData = () =>
  fetch(`${SHEET_URL}/data`)
    .then(response => response.json())

export const getAdvisors = () =>
  fetch(`${SHEET_URL}/advisors`)
    .then(response => response.json())

export const getAdvisoryData = (advisory) =>
  fetch(`${SHEET_URL}/data/${advisory}`)
    .then(response => response.json())

export const getFields = () =>
  fetch(`${SHEET_URL}/fields`)
  .then(response => response.json())

export const getClasses = () =>
  fetch(`${SHEET_URL}/classes`)
    .then(response => response.json())

export const getDepartments = () =>
  fetch(`${SHEET_URL}/departments`)
    .then(response => response.json())

const api = {
  getAllData,
  getAdvisors,
  getAdvisoryData,
  getClasses,
  getDepartments,
  getFields
}

export default api


// spreadsheet ROUTES FROM API
// app.get('/api/spreadsheet/data', getAllData)
// app.get('/api/spreadsheet/data/:advisorName', getAdvisoryData)
// app.get('/api/spreadsheet/advisors', getAdvisors)
// app.get('/api/spreadsheet/classes', getClasses)
// app.get('/api/spreadsheet/departments', getDepartments)
// app.get('/api/spreadsheet/fields', getFields)