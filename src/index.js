import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { compose, createStore, applyMiddleware } from "redux";

import allReducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
