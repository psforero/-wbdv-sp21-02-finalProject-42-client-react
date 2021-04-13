const initialState = {
    advisories: [],
    rowsObj: [],
    students: []
}

const advisoryReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_ADVISORIES":
            // console.log(action.advisories)
            return {
                ...state,
                advisories: action.advisories
            }
        case "GET_ALL_ADVISORY_STUDENTS":
            // console.log(action.rows)
            // console.log(action.rows.map(row => row._rawData[0]))
            return {
                ...state,
                rowsObj: action.rows.map(row => row)
            }
        case "GET_ALL_STUDENTS":
            //console.log(state.students)
            return {
                ...state,
                students: action.students
            }
        default:
            return state
    }
}
export default advisoryReducer