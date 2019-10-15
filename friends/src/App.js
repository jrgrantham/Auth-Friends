import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { connect } from 'react-redux';

function Container(props) {
  const onLogout = () => {
    localStorage.clear();
    props.history.replace('/');
  };

  return (
    <div className='container'>
      <nav>
        <p>
          <NavLink exact to='/'>Login</NavLink><br />
          <NavLink to='/FriendsList'>Friends List</NavLink><br />
        </p>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route
          exact
          path='/'
          component={Login}
        />

        <Route
          exact
          path='/FriendsList'
          render={props => withAthCheck(FriendsList, props)}
          // component={FriendsList}
        />
      </main>
    </div>
  );
}

function withAthCheck(Component, props) {
  if (localStorage.getItem('token')) {
    return <Component {...props} />
  }
  return <Redirect to='/' />;
}

export default connect(
  state => state,
  {}
)(Container);
