import React from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function FriendForm({ formValues, changeInput, addNewFriend }) {
  
  const onValueChange = event => {
    changeInput(event.target);
  };
  
  const onFormSubmit = event => {
    event.preventDefault();
    addNewFriend({
      id: Date.now(),
      name: formValues.name,
      age: formValues.age,
      email: formValues.email
    });
  };

  // const isDisabled = () => !formValues.name || !formValues.age || !formValues.email;
  
  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>Name
        <input 
          value={formValues.name}
          onChange={onValueChange}
          name='name' />
      </label><br />

      <label>Age
        <input
          value={formValues.age}
          onChange={onValueChange}
          name='age' />
      </label><br />

      <label>Email
        <input
          value={formValues.email}
          onChange={onValueChange}
          name='email' />
      </label><br />

      <button>Add Friend</button>
    </form>
  );
}

export default connect(
  state => state,
  actionCreators,
)(FriendForm);