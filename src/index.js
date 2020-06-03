import React from "react"; // == Create Element
import ReactDOM from "react-dom"; // ApppendChild
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import BadgeNew from "./pages/BadgeNew";
import BadgesList from "./pages/BadgesList";

const container = document.getElementById("app");

// ReactDOM.render(que,donde)
ReactDOM.render(<BadgeNew />, container);
ReactDOM.render(<BadgesList />, container);
