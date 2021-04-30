const initialState = {
  studentData: [],
  advisories: [],
  departments: [],
  classes: []
}

const spreadsheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        studentData: action.studentData,
        advisories: action.advisories,
        departments: action.departments,
        classes: action.classes
      }
    default:
      return state
  }
}
export default spreadsheetReducer