import React from "react";
import ReactDOM from "react-dom";
import App from "./Ex1/App";
import App2 from "./Ex2/App_ex2";
import App3 from "./Ex3/App_ex3";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <App2 />
    <App3 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
