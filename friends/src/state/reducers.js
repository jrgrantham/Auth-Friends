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
    case actionTypes.ADD_NEW_FRIEND:
      return [...state, action.payload]
    case actionTypes.DELETE_FRIEND:
      return state.filter(friend => friend.id !== action.payload.id)
    default:
      return state;
  }
}
