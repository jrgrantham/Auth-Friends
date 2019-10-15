import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function FriendsList(props) {
  console.log(props);

  useEffect(() => {
    props.getFriends();
  }, []);

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
          <button onClick={() => props.deleteFriend(friend.id)} >Delete</button>
        </div>
      ))}
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(FriendsList);
