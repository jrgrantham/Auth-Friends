import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { Redirect } from 'react-router-dom';

export const editFriend = friend => {
  console.log(friend);
  return <Redirect to='/AddFriend' friend={friend} />
}

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
          <button onClick={() => editFriend(friend)} >edit</button>
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
