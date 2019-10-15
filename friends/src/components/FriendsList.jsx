import React, { useState, useEffect } from "react";
import withAuth from "../axios";
import FriendForm from "./FriendForm";

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    withAuth()
      .get("http://localhost:5001/api/friends")
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(error => {
        // props.history.push('/'); // could be improved
        alert(error.response.data.error);
      });
  }, []);

  const addFriend = newFriend => {
    withAuth()
      .post("http://localhost:5001/api/friends", newFriend)
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(error => {
        // props.history.push('/'); // could be improved
        alert(error.response.data.error);
      });
  };

  const deleteFriend = (id) => {
    withAuth()
      .delete(`http://localhost:5001/api/friends/${id}`)
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(error => {
        // props.history.push('/'); // could be improved
        alert(error.response.data.error);
      });
  }

  // const replaceFriend = (friend) => {
  //   withAuth()
  //   .put(`http://localhost:5001/api/friends/${friend.id}`, friend)
  //   .then(res => {
  //     console.log(res.data);
  //     setFriends(res.data);
  //   })
  //   .catch(error => {
  //     // props.history.push('/'); // could be improved
  //     alert(error.response.data.error);
  //   });
  // }

  return (
    <div>
      <FriendForm addFriend={addFriend}/>
      <div className="quotes">
        {friends.map(friend => (
          <li key={friend.id}>
            {friend.name} {friend.age} {friend.email}
            <button>edit</button>
            <button onClick={() => deleteFriend(friend.id)} >Delete</button>
          </li>
        ))}
      </div>
    </div>
  );
}
