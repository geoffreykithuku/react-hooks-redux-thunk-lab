import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import catsReducer from "./features/cats/catsSlice";
import { applyMiddleware } from "redux";
import thunkMiddlware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddlware));
const store = createStore(catsReducer, composeEnhancer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
