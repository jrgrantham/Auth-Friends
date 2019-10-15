import React, { useEffect } from "react";
import FriendForm from "./FriendForm";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function FriendsList(props) {
  console.log(props);
  useEffect(() => {
    props.getFriends();
  }, []);

  console.log(props.friends);

  return (
    <div className="allFriends">
      <h2>All Friends</h2>
      {props.friends.map(friend => (
        <div key={friend.id} className='friendCard'>
          <h5>
            {friend.name}
          </h5>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          <button>edit</button>
          {/* <button onClick={() => deleteFriend(friend.id)} >Delete</button> */}
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(FriendsList);

// const deleteFriend = (id) => {
//   withAuth()
//     .delete(`http://localhost:5001/api/friends/${id}`)
//     .then(res => {
//       console.log(res.data);
//       // setFriends(res.data);
//     })
//     .catch(error => {
//       alert(error.response.data.error);
//     });
// }

// const addFriend = newFriend => {
//   withAuth()
//     .post("http://localhost:5001/api/friends", newFriend)
//     .then(res => {
//       console.log(res.data);
//       // setFriends(res.data);
//     })
//     .catch(error => {
//       // props.history.push('/'); // could be improved
//       alert(error.response.data.error);
//     });
// };
