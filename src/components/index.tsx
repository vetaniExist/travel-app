import React from "react";
import ReactDOM from "react-dom";

import "../css/normalize.css";
import HelloWorld from "./HelloWorld/HelloWorld";

const app = document.getElementById("app");

ReactDOM.render(
    <HelloWorld />,
    app,
);
