import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { connect } from 'react-redux';
import "./App.css";
import NavBar from './components/NavBar';


function Container() {

  return (
    <div className='App'>
      <NavBar />

      <main>
        <Route
          exact path='/'
          component={Login}
        />
        <Route
          path='/AddFriend'
          render={props => withAthCheck(FriendForm, props)}
          // component={FriendForm}
        />
        <Route
          exact path='/FriendsList'
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
