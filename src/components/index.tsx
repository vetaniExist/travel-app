import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../css/normalize.css";

const app = document.getElementById("app");

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    app,
);
