const GRADES_URL = 'http://localhost:4000/api/grades' // this may be a bad REST url. Only for testing

export const findAllGrades = () =>
  fetch(`${GRADES_URL}`)
    .then(response => response.json())


const api = {
  findAllGrades,
}

export default api



// grades ROUTES FROM API
// app.get('/api/grades', findAllGrades)
// app.get('/api/grades/:gradeId', findGradeById)
// app.get('/api/users/:userId/grades', findGradesForStudent)
// app.post('/api/users/:userId/grades', createGradeForStudent)
// app.put('/api/users/:userId/grades/:gradeId', updateGradeForStudent)
// app.delete('/api/users/:userId/grades/:gradeId', deleteGradeForStudent)