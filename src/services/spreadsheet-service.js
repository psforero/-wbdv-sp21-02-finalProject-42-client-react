const SHEET_URL = 'http://localhost:4000/api/spreadsheet' // this may be a bad REST url. Only for testing

export const getAdvisors = () =>
  fetch(`${SHEET_URL}/advisors`)
    .then(response => response.json())


export const getAdvisoryData = (advisory) =>
  fetch(`${SHEET_URL}/${advisory}`)
    .then(response => response.json())

const api = {
  getAdvisors,
  getAdvisoryData,
}

export default api


// spreadsheet ROUTES FROM API
// app.get('/api/spreadsheet/metadata', getMetadata)
// app.get('/api/spreadsheet/advisors', getAdvisors)
// app.get('/api/spreadsheet/:advisorName', getValues)