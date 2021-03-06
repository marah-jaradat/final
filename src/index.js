import "bootstrap/dist/css/bootstrap.min.css";
import "react-json-pretty/themes/monikai.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "semantic-ui-css/semantic.min.css";
// import App from './app';
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
