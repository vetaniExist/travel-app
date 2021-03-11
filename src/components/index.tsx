import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../css/normalize.css";
import HelloWorld from "./HelloWorld/HelloWorld";

const app = document.getElementById("app");

ReactDOM.render(
    <React.StrictMode>
        <App />
        <HelloWorld />
    </React.StrictMode>,
    app,
);
