import React from "react"; // == Create Element
import ReactDOM from "react-dom"; // ApppendChild
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import App from "./components/App";

const container = document.getElementById("app");

// ReactDOM.render(que,donde)
//ReactDOM.render(<BadgeNew />, container);
ReactDOM.render(<App />, container);
