import React from "react";
import ReactDOM from "react-dom";
import Form from "./form";
import "./styles.css";
import { createStore } from "redux";
import createReducers from "./reducers";

import { Provider } from "react-redux";

const App = () => {
  return [
    <Provider key store={createStore(createReducers())}>
      <div>
        <Form />
      </div>
    </Provider>
  ];
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
