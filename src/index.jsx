import React from "react";
import ReactDOM from "react-dom";
import { Provider as Redux } from "react-redux";

import "./styles/index.scss";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Redux store={store}>
    <App />
  </Redux>,
  document.getElementById("root"),
);
