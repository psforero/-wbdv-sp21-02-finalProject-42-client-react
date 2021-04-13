const initialState = {
    national: [],
    ma: [],
    wdlc: [350, 400, 360, 410, 500]
}

const scoreReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_NATIONAL_SCORES":
            return {
                ...state,
                national: action.national
            }
        case "FIND_STATE_SCORES":
            return {
                ...state,
                ma: action.ma
            }
        default:
            return state
    }
}

export default scoreReducer