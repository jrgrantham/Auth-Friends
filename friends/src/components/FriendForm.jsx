import React, { useState, useEffect } from "react";
import uuid from "uuid";

const initialFriendForm = {
  name: "",
  age: "",
  email: ""
};

export default function FriendForm(props) {
  
  const [friendForm, setFriendForm] = useState(initialFriendForm);
  
  const onChange = e => {
    setFriendForm({ 
      ...friendForm, 
      [e.target.name]: e.target.value
    });
  };
  
  const onFormSubmit = e => {
    e.preventDefault();
    props.addFriend({...friendForm, id: uuid()})
    setFriendForm(initialFriendForm);
  }
  
  const isDisabled = () => {
    if (!friendForm.name || !friendForm.age || !friendForm.email) {
      return true;
    }
    return false;
  };
  
  return (
    <form>
      <label htmlFor="nameInput">Name</label>
      <input
        name="name"
        value={friendForm.name}
        onChange={onChange}
        id="nameInput"
        type="text"
      />
      <br />
      <label htmlFor="ageInput">Age</label>
      <input
        name="age"
        value={friendForm.age}
        onChange={onChange}
        id="ageInput"
        type="number"
      />
      <br />
      <label htmlFor="ageInput">Email</label>
      <input
        name="email"
        value={friendForm.email}
        onChange={onChange}
        id="ageInput"
        type="text"
      />
      <br />

      <button disabled={isDisabled()} onClick={onFormSubmit}>
        submit
      </button>
    </form>
  );
}
