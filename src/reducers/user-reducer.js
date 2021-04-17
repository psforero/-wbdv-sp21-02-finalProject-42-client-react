const initialState = {
    user: {}
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                user: action.user
            }
        default:
            return state
    }
}
export default userReducer