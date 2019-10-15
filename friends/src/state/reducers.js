import * as actionTypes from './actionTypes';

const allFriends = [];
const bestFriends = [];
const friendForm = {
  name: "",
  age: "",
  email: "",
}

export function allFriendsReducer(state = allFriends, action) {
  switch (action.type) {
    case actionTypes.IMPORT_FRIENDS:
      return action.payload
    case actionTypes.ADD_NEW_FRIEND:
      return [...state, action.payload]
    case actionTypes.DELETE_FRIEND:
      return state.filter(friend => friend.id !== action.payload.id)
    default:
      return state;
  }
}

export function friendFormReducer(state = friendForm, action) {
  switch (action.type) {
    case actionTypes.ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state;
  }
}