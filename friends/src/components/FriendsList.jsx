import React, { useState, useEffect } from "react";
import withAuth from "../axios";
import uuid from "uuid";

const initialFriendForm = {
  name: "",
  age: "",
  email: ""
};

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const [friendForm, setFriendForm] = useState(initialFriendForm);

  const onNameChange = e => {
    setFriendForm({
      name: e.target.value,
      age: friendForm.age,
      email: friendForm.email,
    });
  };

  const onAgeChange = e => {
    setFriendForm({
      name: friendForm.name,
      age: e.target.value,
      email: friendForm.email,
    });
  };

  const onEmailChange = e => {
    setFriendForm({
      name: friendForm.name,
      age: friendForm.age,
      email: e.target.value,
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const newFriend = {
      id: uuid(),
      name: friendForm.name,
      age: friendForm.age,
      email: friendForm.email
    };
    const newFriendsList = friends.concat(newFriend);
    setFriends(newFriendsList);
    setFriendForm(initialFriendForm);
  };

  const isDisabled = () => {
    if (!friendForm.name || !friendForm.age || !friendForm.email) {
      return true;
    }
    return false;
  };

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

  return (
    <div>
      <form>
        <label htmlFor="nameInput">Name</label>
        <input
          value={friendForm.name}
          onChange={onNameChange}
          id="nameInput"
          type="text"
        /><br />
        <label htmlFor="ageInput">Age</label>
        <input
          value={friendForm.age}
          onChange={onAgeChange}
          id="ageInput"
          type="number"
        /><br />
        <label htmlFor="ageInput">Email</label>
        <input
          value={friendForm.email}
          onChange={onEmailChange}
          id="ageInput"
          type="text"
        /><br />

        <button disabled={isDisabled()} onClick={onFormSubmit}>
          submit
        </button>
      </form>

      <div className="quotes">
        {friends.map(friend => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </div>
    </div>
  );
}
