import withAuth from "../axios";
import * as types from "./actionTypes";


const friendsApi = "http://localhost:5001/api/friends/";

export const getFriends = () => dispatch => {
  withAuth()
    .get(friendsApi)
    .then(res => {
      const friends = res.data;
      console.log(friends);
      dispatch({
        type: types.IMPORT_FRIENDS,
        payload: friends
      });
    })
    .catch(error => {
      // props.history.push('/'); // could be improved
      // alert(error.response.data.error);
    });
};

export const addNewFriend = newFriend => dispatch => {
  withAuth()
    .post(friendsApi, newFriend)
    .then(res => {
      const friends = res.data;
      console.log(friends);
      dispatch({
        type: types.IMPORT_FRIENDS,
        payload: friends
      });
    })
    .catch(error => {
      // props.history.push('/'); // could be improved
      alert(error.response.data.error);
    });
};

export const deleteFriend = id => dispatch => {
  withAuth()
    .delete(`${friendsApi}${id}`)
    .then(res => {
      const friends = res.data;
      console.log(friends);
      dispatch({
        type: types.IMPORT_FRIENDS,
        payload: friends
      });
    })
    .catch(error => {
      // props.history.push('/'); // could be improved
      alert(error.response.data.error);
    });
};

export const uploadEditedFriend = friend => dispatch => {
  withAuth()
    .put(`${friendsApi}${friend.id}`)
    .then(res => {
      const friends = res.data;
      console.log(friends);
      dispatch({
        type: types.IMPORT_FRIENDS,
        payload: friends
      });
    })
    .catch(error => {
      // props.history.push('/'); // could be improved
      alert(error.response.data.error);
    });
};

export function changeInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    }
  };
}
