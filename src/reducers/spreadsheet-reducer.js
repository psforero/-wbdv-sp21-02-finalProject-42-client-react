const initialState = {
  studentData: []
}

const spreadsheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STUDENT_DATA':
      return {
        ...state,
        advisories: action.advisories
      }
    default:
      return state
  }
}
export default spreadsheetReducer