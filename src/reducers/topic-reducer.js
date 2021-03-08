const initialState = {
    topics: []
}

const topicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(l => {
                    if(l._id === action.topic._id) {
                        return action.topic
                    } else {
                        return l
                    }
                })
            }
        case "DELETE_TOPIC":
            const newState1 = {
                topics: state.topics.filter(topic => {
                    if(topic._id === action.topicToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        default:
            return state
    }
}

export default topicReducer