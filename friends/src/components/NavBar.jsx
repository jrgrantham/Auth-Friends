import React from "react";
import { NavLink } from 'react-router-dom';


export default function NavBar() {
  const onLogout = () => {
    localStorage.clear();
    // props.history.replace('/');
  };
  return (
    <nav>
        <NavLink exact to="/">Login</NavLink><br />
        <NavLink to="/AddFriend">Add Friend</NavLink><br />
        <NavLink to="/FriendsList">Friends List</NavLink><br />
      <button onClick={onLogout}>Logout</button>
    </nav>
  );
}
