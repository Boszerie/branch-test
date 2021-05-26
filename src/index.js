import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// end Redux

const userReducer = (
  state = { name: "My Name is Ravisut Srichan", age: "22 year old" },
  action
) => {
  switch (action.type) {
    case "setName":
      state = {
        ...state,
        name: action.payload,
      };
      break;

    case "setAge":
      state = {
        ...state,
        age: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
};

const mylogger = (store) => (next) => (action) => {
  console.log("Log Action", action);
  next(action);
};

const store = createStore(
  combineReducers({ user: userReducer }),
  {},
  applyMiddleware(mylogger)
);

store.subscribe(() => {
  console.log("Ubdate Store:", store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
