const initialState = {
  checkins: []
}

const CheckinReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_CHECKINS_FOR_STUDENT':
      return {
        ...state,
        checkins: action.checkins
      }
    case 'CREATE_CHECKIN':
      return {
        ...state,
        checkins: [...state.checkins, action.checkin]
      }
    case 'DELETE_CHECKIN':
      return {
        ...state,
        checkins: state.checkins.filter(checkin => {
          return (checkin._id !== action.checkin._id);
        })
      }
    case 'UPDATE_CHECKIN':
      return {
        checkins: state.checkins.map(checkin => {
          return (checkin._id === action.checkin._id) ? action.checkin : checkin
        })
      }
    default:
      return state
  }
}

export default CheckinReducer