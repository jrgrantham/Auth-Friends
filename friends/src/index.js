import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { allFriendsReducer, friendFormReducer } from "./state/reducers";

const monsterReducer = combineReducers({
  friends: allFriendsReducer,
  formValues: friendFormReducer,
});

const store = createStore(
  monsterReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
